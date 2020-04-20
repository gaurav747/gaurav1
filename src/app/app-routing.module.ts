import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Cmp1Component} from './cmp1/cmp1.component';
import {Cmp2Component} from './cmp2/cmp2.component';
import { MapComponent } from './map/map.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DougnutChartComponent } from './dougnut-chart/dougnut-chart.component';
import { LinChartComponent } from './lin-chart/lin-chart.component';


const routes: Routes = [
//{path: '**', component: Cmp2Component },
{path: "cmp1", component:Cmp1Component },
{path: "", component: Cmp2Component},
{path: "map", component: MapComponent},
{path: "cmp2", component: Cmp2Component},
{path: "barchart", component: BarChartComponent},
{path: "doughnutchart", component: DougnutChartComponent},
{path: "linechart", component: LinChartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
