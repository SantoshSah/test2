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
var FlowUploadBtn = (function () {
    function FlowUploadBtn(el, flowService) {
        this.el = el;
        this.flowService = flowService;
        this._isDirectory = false;
        this._isSingleFile = false;
        this.flowjs = flowService.getFlowJsObject();
    }
    Object.defineProperty(FlowUploadBtn.prototype, "flowDirectory", {
        set: function (isDirectory) {
            this._isDirectory = isDirectory || this._isDirectory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowUploadBtn.prototype, "flowSingleFile", {
        set: function (isSingleFile) {
            this._isSingleFile = isSingleFile || this._isSingleFile;
        },
        enumerable: true,
        configurable: true
    });
    FlowUploadBtn.prototype.ngOnInit = function () {
        this.flowjs.assignBrowse(this.el, this._isDirectory, this._isSingleFile, null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], FlowUploadBtn.prototype, "flowDirectory", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], FlowUploadBtn.prototype, "flowSingleFile", null);
    FlowUploadBtn = __decorate([
        core_1.Directive({
            selector: '[flow-upload-btn]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, index_1.FlowService])
    ], FlowUploadBtn);
    return FlowUploadBtn;
}());
exports.FlowUploadBtn = FlowUploadBtn;
//# sourceMappingURL=flow-upload-btn.directive.js.map