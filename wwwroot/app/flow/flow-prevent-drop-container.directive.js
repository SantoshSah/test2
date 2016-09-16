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
var FlowPreventDropContainerDirective = (function () {
    function FlowPreventDropContainerDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._dragLeaveClass = '';
        this._dragEnterClass = '';
    }
    Object.defineProperty(FlowPreventDropContainerDirective.prototype, "dragLeaveClass", {
        set: function (dragLeaveClass) {
            this._dragLeaveClass = dragLeaveClass || this._dragLeaveClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowPreventDropContainerDirective.prototype, "dragEnterClass", {
        set: function (dragEnterClass) {
            this._dragEnterClass = dragEnterClass || this._dragEnterClass;
        },
        enumerable: true,
        configurable: true
    });
    FlowPreventDropContainerDirective.prototype.onDragEnter = function (event) {
        this.setDragEnterClass();
    };
    FlowPreventDropContainerDirective.prototype.onDragLeave = function (event) {
        this.setDragLeaveClass();
    };
    FlowPreventDropContainerDirective.prototype.onDragOver = function (event) {
        // prevent default to allow drop and default action (open as link for some elements)
        event.preventDefault();
        event.stopPropagation();
    };
    FlowPreventDropContainerDirective.prototype.onDrop = function (event) {
        this.setDragLeaveClass();
        // prevent default to allow drop and default action (open as link for some elements)
        event.preventDefault();
        event.stopPropagation();
    };
    FlowPreventDropContainerDirective.prototype.setDragLeaveClass = function () {
        if (this._dragLeaveClass)
            this.renderer.setElementClass(this.el.nativeElement, this._dragLeaveClass, true);
        if (this._dragEnterClass)
            this.renderer.setElementClass(this.el.nativeElement, this._dragEnterClass, false);
    };
    FlowPreventDropContainerDirective.prototype.setDragEnterClass = function () {
        if (this._dragLeaveClass)
            this.renderer.setElementClass(this.el.nativeElement, this._dragEnterClass, true);
        if (this._dragEnterClass)
            this.renderer.setElementClass(this.el.nativeElement, this._dragLeaveClass, false);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], FlowPreventDropContainerDirective.prototype, "dragLeaveClass", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], FlowPreventDropContainerDirective.prototype, "dragEnterClass", null);
    __decorate([
        core_1.HostListener('dragenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowPreventDropContainerDirective.prototype, "onDragEnter", null);
    __decorate([
        core_1.HostListener('dragleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowPreventDropContainerDirective.prototype, "onDragLeave", null);
    __decorate([
        core_1.HostListener('dragover', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowPreventDropContainerDirective.prototype, "onDragOver", null);
    __decorate([
        core_1.HostListener('drop', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FlowPreventDropContainerDirective.prototype, "onDrop", null);
    FlowPreventDropContainerDirective = __decorate([
        core_1.Directive({
            selector: '[flow-prevent-drop-container]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], FlowPreventDropContainerDirective);
    return FlowPreventDropContainerDirective;
}());
exports.FlowPreventDropContainerDirective = FlowPreventDropContainerDirective;
//# sourceMappingURL=flow-prevent-drop-container.directive.js.map