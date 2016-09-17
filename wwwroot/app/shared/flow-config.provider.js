"use strict";
var core_1 = require('@angular/core');
//set flowjs configuration
var FLOWJS_CONFIG = {
    target: '/api/flowupload',
    method: 'multipart',
    testMethod: 'GET',
    uploadMethod: 'POST',
    permanentErrors: [404, 500, 501],
    successStatuses: [200, 201, 202],
    maxChunkRetries: 1,
    chunkRetryInterval: 5000,
    simultaneousUploads: 4,
    chunkSize: 1024 * 1024,
    testChunks: false
};
exports.FLOWJSCONFIG = new core_1.OpaqueToken(FLOWJS_CONFIG);
//# sourceMappingURL=flow-config.provider.js.map