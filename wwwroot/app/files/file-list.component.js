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
var FileListComponent = (function () {
    function FileListComponent(fs) {
        this.fs = fs;
        this.files = [];
        this.flowjs = fs.getFlowJsObject();
    }
    FileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.fs.flowFilesSelected$.subscribe(function (file) { return _this.refreshFiles(file); });
    };
    FileListComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    FileListComponent.prototype.refreshFiles = function (flowFile) {
        this.files = this.flowjs.files;
    };
    FileListComponent.prototype.pauseFile = function (flowFile) {
        //.pause() Pause uploading the file.
        flowFile.pause();
    };
    FileListComponent.prototype.resumeFile = function (flowFile) {
        //.resume() Resume uploading the file.
        flowFile.resume();
    };
    FileListComponent.prototype.cancelFile = function (flowFile) {
        //.cancel() Abort uploading the file and delete it from the list of files to upload.
        flowFile.cancel();
    };
    FileListComponent.prototype.retryFile = function (flowFile) {
        //Retry uploading the file.
        flowFile.retry();
    };
    FileListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'file-list',
            templateUrl: 'file-list.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.FlowService])
    ], FileListComponent);
    return FileListComponent;
}());
exports.FileListComponent = FileListComponent;
//# sourceMappingURL=file-list.component.js.map