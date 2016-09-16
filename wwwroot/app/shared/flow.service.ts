import { Inject, Injectable } from '@angular/core';
import { ReplaySubject }    from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { OpaqueToken } from '@angular/core';

import * as flowjs from 'flowjs';
import {FLOWJSCONFIG} from './flow-config.provider';

@Injectable()
export class FlowService {
	flowjs: any;
  startAutoUpload: boolean = false;

  // Observable FlowFile sources
  private flowFileSource = new ReplaySubject<any>(0);

	// Observable string streams
	flowFilesSelected$ = this.flowFileSource.asObservable();

	constructor(@Inject(FLOWJSCONFIG) flowJsConfig: any) {
    let me = this; //preserve 'this' context
		this.flowjs = new flowjs(flowJsConfig._desc);

    
    this.flowjs.on('fileAdded', function(file){ 
      me.flowFileSource.next(file);
      if(me.startAutoUpload) {
        setTimeout(
          function(){
            me.flowjs.upload();
          }
        ,1);
      }
    });

    this.flowjs.on('fileRemoved', function(file){ 
      me.flowFileSource.next(file);
    });

    this.flowjs.on('fileRemoved', function(file){ 
        me.flowFileSource.next(file);
    });


  }

	getFlowJsObject() { 
  	return this.flowjs;  
	}
}
