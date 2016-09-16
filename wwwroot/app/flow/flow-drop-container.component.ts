import { Component, ElementRef,HostListener, Input, OnInit, OnDestroy, Renderer } from '@angular/core';

import {FlowService} from '../shared/index';

@Component({
	selector: 'flow-drop-container',
	template:`<div class="alert" style="height:100px;"> Drag And Drop your file(s) here </div>`
})

export class FlowDropContainerComponent implements OnInit, OnDestroy { 
	flowjs: any;
	_defaultClass: string = 'alert-warning';
	_dragEnterClass: string = 'alert-success';

  	constructor(private fs: FlowService, private el: ElementRef, private renderer: Renderer) {
    	this.flowjs = fs.getFlowJsObject();
    }

    @Input() set defaultClass(defaultClass: string) {
		this._defaultClass = defaultClass || this._defaultClass;
		this.renderer.setElementClass(this.el.nativeElement.children[0], this._defaultClass, true);
	}

	@Input() set dragEnterClass(dragEnterClass: string) {
		this._dragEnterClass = dragEnterClass || this._dragEnterClass;
	}

	@HostListener('dragenter', ['$event']) onDragEnter(event): void {
		this.setDragEnterClass();
	}

	@HostListener('dragleave', ['$event']) onDragLeave(event): void {
		this.setDefaultClass();
	}

	@HostListener('dragover', ['$event']) onDragOver(event): void {
		// prevent default to allow drop and default action (open as link for some elements)
		event.preventDefault();
		event.stopPropagation();
	}

	@HostListener('drop', ['$event']) onDrop(event): void {
		// prevent default to allow drop and default action (open as link for some elements)
		event.preventDefault();
		event.stopPropagation();
		this.setDefaultClass();	
	}

    ngOnInit(): void {
		this.flowjs.assignDrop(this.el.nativeElement);	
	}
	  
	ngOnDestroy(): void {
		//flush out any resources being used
	}  

	setDefaultClass(): void {
		this.renderer.setElementClass(this.el.nativeElement.children[0], this._defaultClass, true);
		this.renderer.setElementClass(this.el.nativeElement.children[0], this._dragEnterClass, false);
	}

	setDragEnterClass(): void {
		this.renderer.setElementClass(this.el.nativeElement.children[0], this._dragEnterClass, true);
		this.renderer.setElementClass(this.el.nativeElement.children[0], this._defaultClass, false);
	}
    
}