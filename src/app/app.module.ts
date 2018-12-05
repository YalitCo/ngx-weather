import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { NgxLoadingModule } from 'ngx-loading';


import { AppComponent } from './app.component';
import { WeatherItemsComponent } from './weather-items/weather-items.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
