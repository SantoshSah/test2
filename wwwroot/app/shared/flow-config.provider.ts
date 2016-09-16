import { OpaqueToken } from '@angular/core';

//set flowjs configuration

const FLOWJS_CONFIG = {
  target:'/api/flowupload'
};

export let FLOWJSCONFIG = new OpaqueToken(FLOWJS_CONFIG);


