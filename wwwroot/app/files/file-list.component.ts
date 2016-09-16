import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {FlowService} from '../shared/index';
import * as Flowjs from 'flowjs';

@Component({
	moduleId: module.id,
	selector: 'file-list',
	templateUrl:'file-list.component.html'
})

export class FileListComponent implements OnInit, OnDestroy { 
	flowjs: any;
	files: any[] = [];
	subscription:Subscription;

  	constructor(private fs: FlowService) {
    	this.flowjs = fs.getFlowJsObject();
    }

    ngOnInit(): void {
		this.subscription = this.fs.flowFilesSelected$.subscribe(
		  file => this.refreshFiles(file));
	}
	  
	ngOnDestroy(): void {
		// prevent memory leak when component is destroyed
		this.subscription.unsubscribe();
	}  

	refreshFiles(flowFile: any): void {
    	this.files = this.flowjs.files;
    }
    
    
	pauseFile(flowFile: any): void {
		//.pause() Pause uploading the file.
		flowFile.pause();
	}

	resumeFile(flowFile: any): void {
		//.resume() Resume uploading the file.
		flowFile.resume();
	}

	cancelFile(flowFile: any): void {
		//.cancel() Abort uploading the file and delete it from the list of files to upload.
		flowFile.cancel();
	}

	retryFile(flowFile: any): void {
		//Retry uploading the file.
		flowFile.retry();
	}
	
}