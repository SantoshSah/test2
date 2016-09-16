import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }   from './app.component';
import {FileListComponent} from './files/file-list.component';
import {FlowDropContainerComponent, FlowPreventDropContainerDirective, FlowUploadBtn} from './flow/index';
import {FlowService, FLOWJSCONFIG} from './shared/index';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FileListComponent, FlowDropContainerComponent, FlowPreventDropContainerDirective, FlowUploadBtn],
  bootstrap:    [ AppComponent ],
  providers: [FlowService, { provide: FLOWJSCONFIG, useValue: FLOWJSCONFIG }]
})

export class AppModule { }
