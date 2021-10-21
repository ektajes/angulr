import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PhotoService } from './photo.service';
import { AppComponent } from './app.component';
import { ComparisonComponent } from './comparison/comparison.component';
@NgModule({
  declarations: [
    AppComponent,
    ComparisonComponent
  ],
  imports: [

  BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
