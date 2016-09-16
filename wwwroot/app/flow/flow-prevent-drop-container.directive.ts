import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
	selector: '[flow-prevent-drop-container]'
})

export class FlowPreventDropContainerDirective {
	_dragLeaveClass: string = '';
	_dragEnterClass: string = '';

  	constructor(private el: ElementRef, private renderer: Renderer) {}

    @Input() set dragLeaveClass(dragLeaveClass: string) {
		this._dragLeaveClass = dragLeaveClass || this._dragLeaveClass;
	}

	@Input() set dragEnterClass(dragEnterClass: string) {
		this._dragEnterClass = dragEnterClass || this._dragEnterClass;
	}

	@HostListener('dragenter', ['$event']) onDragEnter(event): void {
		this.setDragEnterClass();
	}

	@HostListener('dragleave', ['$event']) onDragLeave(event): void {
		this.setDragLeaveClass();
	}

	@HostListener('dragover', ['$event']) onDragOver(event): void {
		// prevent default to allow drop and default action (open as link for some elements)
		event.preventDefault();
		event.stopPropagation();
	}

	@HostListener('drop', ['$event']) onDrop(event): void {
		this.setDragLeaveClass();
		// prevent default to allow drop and default action (open as link for some elements)
		event.preventDefault();
		event.stopPropagation();
	}

	setDragLeaveClass(): void {
		if(this._dragLeaveClass) this.renderer.setElementClass(this.el.nativeElement, this._dragLeaveClass, true);
		if(this._dragEnterClass) this.renderer.setElementClass(this.el.nativeElement, this._dragEnterClass, false);
	}

	setDragEnterClass(): void {
		if(this._dragLeaveClass) this.renderer.setElementClass(this.el.nativeElement, this._dragEnterClass, true);
		if(this._dragEnterClass) this.renderer.setElementClass(this.el.nativeElement, this._dragLeaveClass, false);
	}
    
}