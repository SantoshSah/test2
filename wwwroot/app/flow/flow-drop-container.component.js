"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../shared/index');
var FlowDropContainerComponent = (function () {
    function FlowDropContainerComponent(fs, el, renderer) {
        this.fs = fs;
        this.el = el;
        this.renderer = renderer;
        this._defaultClass = 'alert-warning';
        this._dragEnterClass = 'alert-success';
        this.flowjs = fs.getFlowJsObject();
    }
    Object.defineProperty(FlowDropContainerComponent.prototype, "defaultClass", {
        set: function (defaultClass) {
            this._defaultClass = defaultClass || this._defaultClass;
            this.renderer.setElementClass(this.el.nativeElement.children[0], this._defaultClass, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowDropContainerComponent.prototype, "dragEnterClass", {
        set: function (dragEnterClass) {
            this._dragEnterClass = dragEnterClass || this._dragEnterClass;
        },
        enumerable: true,
        configurable: true
    });
    FlowDropContainerComponent.prototype.onDragEnter = function (event) {
        this.setDragEnterClass();
    };
    FlowDropContainerComponent.prototype.onDragLeave = function (event) {
        this.setDefaultClass();
    };
    FlowDropContainerComponent.prototype.onDragOver = function (event) {
        // prevent default to allow drop and default action (open as link for some elements)
        event.preventDefault();
        event.stopPropagation();
    };
    FlowDropContainerComponent.prototype.onDrop = function (event) {
        // prevent default to allow drop and default action (open as link for some elements)
        event.preventDefault();
        event.stopPropagation();
        this.setDefaultClass();
    };
    FlowDropContainerComponent.prototype.ngOnInit = function () {
        this.flowjs.assignDrop(this.el.nativeElement);
    };
    FlowDropContainerComponent.prototype.ngOnDestroy = function () {
        //flush out any resources being used
    };
    FlowDropContainerComponent.prototype.setDefaultClass = function () {
        this.renderer.setElementClass(this.el.nativeElement.children[0], this._defaultClass, true);
        this.renderer.setElementClass(this.el.nativeElement.children[0], this._dragEnterClass, false);
    };
    FlowDropContainerComponent.prototype.setDragEnterClass = function () {
        this.renderer.setElementClass(this.el.nativeElement.children[0], this._dragEnterClass, true);
        this.renderer.setElementClass(this.el.nativeElement.children[0], this._defaultClass, false);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], FlowDropContainerComponent.prototype, "defaultClass", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], FlowDropContainerComponent.prototype, "dragEnterClass", null);
    __decorate([
        core_1.HostListener('dragenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowDropContainerComponent.prototype, "onDragEnter", null);
    __decorate([
        core_1.HostListener('dragleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowDropContainerComponent.prototype, "onDragLeave", null);
    __decorate([
        core_1.HostListener('dragover', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowDropContainerComponent.prototype, "onDragOver", null);
    __decorate([
        core_1.HostListener('drop', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowDropContainerComponent.prototype, "onDrop", null);
    FlowDropContainerComponent = __decorate([
        core_1.Component({
            selector: 'flow-drop-container',
            template: "<div class=\"alert\" style=\"height:100px;\"> Drag And Drop your file(s) here </div>"
        }), 
        __metadata('design:paramtypes', [index_1.FlowService, core_1.ElementRef, core_1.Renderer])
    ], FlowDropContainerComponent);
    return FlowDropContainerComponent;
}());
exports.FlowDropContainerComponent = FlowDropContainerComponent;
//# sourceMappingURL=flow-drop-container.component.js.map