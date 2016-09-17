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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
var flowjs = require('flowjs');
var flow_config_provider_1 = require('./flow-config.provider');
var FlowService = (function () {
    function FlowService(flowJsConfig) {
        this.startAutoUpload = false;
        // Observable FlowFile sources
        this.flowFileSource = new ReplaySubject_1.ReplaySubject(0);
        // Observable string streams
        this.flowFilesSelected$ = this.flowFileSource.asObservable();
        var me = this; //preserve 'this' context
        this.flowjs = new flowjs(flowJsConfig._desc);
        this.flowjs.on('fileAdded', function (file) {
            me.flowFileSource.next(file);
            if (me.startAutoUpload) {
                setTimeout(function () {
                    me.flowjs.upload();
                }, 1);
            }
        });
        this.flowjs.on('fileRemoved', function (file) {
            me.flowFileSource.next(file);
        });
        this.flowjs.on('fileRemoved', function (file) {
            me.flowFileSource.next(file);
        });
        this.flowjs.on('filesSubmitted', function (file) {
            console.log(file);
        });
    }
    FlowService.prototype.getFlowJsObject = function () {
        return this.flowjs;
    };
    FlowService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(flow_config_provider_1.FLOWJSCONFIG)), 
        __metadata('design:paramtypes', [Object])
    ], FlowService);
    return FlowService;
}());
exports.FlowService = FlowService;
//# sourceMappingURL=flow.service.js.map