import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmazingTimePickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
