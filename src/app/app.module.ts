import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";

import { AppComponent } from './app.component';
import { FroalaComponent } from './froala/froala.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
