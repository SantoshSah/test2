import { OpaqueToken } from '@angular/core';

//set flowjs configuration

const FLOWJS_CONFIG = {
  target:'/api/flowupload',
  method: 'multipart',
  testMethod: 'GET',
  uploadMethod: 'POST',
  permanentErrors: [404, 500, 501],
  successStatuses: [200,201, 202],
  maxChunkRetries: 1,
  chunkRetryInterval: 5000,
  simultaneousUploads: 4,
  chunkSize: 1024*1024,
  testChunks: false
};

export let FLOWJSCONFIG = new OpaqueToken(FLOWJS_CONFIG);


