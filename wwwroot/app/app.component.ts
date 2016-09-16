import { Component } from '@angular/core';

import {FileListComponent} from './files/file-list.component'
import {FlowService} from './shared/flow.service';
import {FlowUploadBtn} from '../app/flow/flow-upload-btn.directive';
import {FlowDropContainerComponent} from '../app/flow/flow-drop-container.component';
import {FlowPreventDropContainerDirective} from '../app/flow/flow-prevent-drop-container.directive';

@Component({
	moduleId: module.id,
	selector: 'ng2-flow-sample',
	templateUrl: 'app.component.html'
})


export class AppComponent { 
	flowjs: any;
	files: any[] = [];

  	constructor(private fs: FlowService) {
    	this.flowjs = fs.getFlowJsObject();
    }

    uploadFiles(): void {
    	this.flowjs.resume();
    }

	pauseFiles(): void {
    	this.flowjs.pause();
    }

    cancelFiles(): void {
    	this.flowjs.cancel();
    }
      
}





