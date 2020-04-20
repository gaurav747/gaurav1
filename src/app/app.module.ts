import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { Cmp2Component } from './cmp2/cmp2.component';
import { ErrorCmpComponent } from './error-cmp/error-cmp.component';
import { MapComponent } from './map/map.component';
import { BarChartComponent } from './bar-chart/bar-chart.component'; 
import { ChartsModule } from 'ng2-charts';
import { DougnutChartComponent } from './dougnut-chart/dougnut-chart.component';
import { LinChartComponent } from './lin-chart/lin-chart.component';   

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    ErrorCmpComponent,
    MapComponent,
    BarChartComponent,
    DougnutChartComponent,
    LinChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule

 
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
