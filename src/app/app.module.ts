import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";

import {AppComponent} from './app.component';
import {FroalaComponent} from './froala/froala.component';
import {ToastComponent} from './toast/toast.component';
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  {path: 'froala', component: FroalaComponent, data: {debug: false}},
  {path: 'toast', component: ToastComponent, data: {debug: false}},
  {path: 'froala-test', component: FroalaComponent, data: {debug: true}},
  {path: 'toast-test', component: ToastComponent, data: {debug: true}},
  {path: '', redirectTo: '/froala', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
