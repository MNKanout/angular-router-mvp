import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes =[
  {
    path:'test1',
    component: Test1Component,
    title: 'test1',
  },
  {
    path:'test2',
    component: Test2Component,
    title: 'test2',
  },
]

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
