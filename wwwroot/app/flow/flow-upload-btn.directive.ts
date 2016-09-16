import { Directive, ElementRef, Input, OnInit} from '@angular/core';

import {FlowService} from '../shared/index';

@Directive({ 
   selector: '[flow-upload-btn]'
})

export class FlowUploadBtn implements OnInit {
    flowjs: any;
    _isDirectory: boolean = false;
    _isSingleFile: boolean = false;

    constructor(private el: ElementRef, private flowService: FlowService) {
    	this.flowjs = flowService.getFlowJsObject();
    }

	@Input() set flowDirectory(isDirectory: boolean){
		this._isDirectory = isDirectory || this._isDirectory;
	}

	@Input() set flowSingleFile(isSingleFile: boolean){
		this._isSingleFile = isSingleFile || this._isSingleFile;
	}

	ngOnInit(): void {
		this.flowjs.assignBrowse(this.el,this._isDirectory,this._isSingleFile,null);
	}

}