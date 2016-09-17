using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.WebUtilities;

namespace ng2_flow_sample.Controllers
{
    [Route("api/[controller]")]
    public class FlowUploadController : Controller
    {
        string root = Path.Combine(Path.GetFullPath("."), "FlowUpload");

        [HttpGet]
        public object Get(
            int flowChunkNumber,
            int flowChunkSize,
            int flowCurrentChunkSize,
            int flowTotalSize,
            string flowIdentifier,
            string flowFilename,
            string flowRelativePath,
            int flowTotalChunks)
        {
            return NotFound();
        }

        [HttpPost]
        public async Task<object> Post()
        {
            
                if (!IsMultipartContentType(HttpContext.Request.ContentType))
                {
                    return BadRequest();
                }

                /*
                 var form = Request.Form;
                foreach(var formFile in form.Files)
                {
                    using(var readStream = formFile.OpenReadStream())
                    {
                        // Do something with the uploaded file
                    }
                }
                */

                var boundary = GetBoundary(HttpContext.Request.ContentType);
                //var file = HttpContext.Request.Body.file;
                var reader = new MultipartReader(boundary, HttpContext.Request.Body);
                var section = await reader.ReadNextSectionAsync();

                while (section != null)
                {
                    // process each image
                    const int chunkSize = 1024;
                    var buffer = new byte[chunkSize];
                    var bytesRead = 0;

                    var fileName = GetFileName(section.ContentDisposition);

                    if(fileName == "file"){

                        fileName = root + "/" + fileName;

                        using (var stream = new FileStream(fileName, FileMode.Append))
                        {
                            do
                            {
                                bytesRead = await section.Body.ReadAsync(buffer, 0, buffer.Length);
                                stream.Write(buffer, 0, bytesRead);

                            } while (bytesRead > 0);
                        }
                    }

                    section = await reader.ReadNextSectionAsync();
                }

                return Ok();

        }



        private static bool IsMultipartContentType(string contentType)
        {
            return 
                !string.IsNullOrEmpty(contentType) &&
                contentType.IndexOf("multipart/", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        private static string GetBoundary(string contentType)
        {
            var elements = contentType.Split(' ');
            var element = elements.Where(entry => entry.StartsWith("boundary=")).First();
            var boundary = element.Substring("boundary=".Length);
            // Remove quotes
            if (boundary.Length >= 2 && boundary[0] == '"' && 
                boundary[boundary.Length - 1] == '"')
            {
                boundary = boundary.Substring(1, boundary.Length - 2);
            }
            return boundary;
        }

        private string GetFileName(string contentDisposition)
        {
            return contentDisposition
                .Split(';')
                .SingleOrDefault(part => part.Contains("name"))
                .Split('=')
                .Last()
                .Trim('"');
        }

    }
}