import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsListComponent } from './cars-list/cars-list.component';

import { CarListComponent } from './components/car-list/car-list.component';

@NgModule({
declarations: [
AppComponent,
CarsListComponent,

CarListComponent,
],
imports: [
BrowserModule,
AppRoutingModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }