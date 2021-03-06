import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // NgModel


import { AppComponent } from './app.component';
import { ForcastService } from './forcast.service';
import { ForcastComponent } from './forcast/forcast.component';


@NgModule({
  declarations: [
    AppComponent,
    ForcastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ForcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
