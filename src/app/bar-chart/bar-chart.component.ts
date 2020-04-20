import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private router: Router) { }

  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

//-------------------------------------------------------------------------------------


public lineChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public lineChartType = 'line';
public lineChartLegend = true;
public lineChartData = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

//--------------------------------------------------------------------------------------------

public pieChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public pieChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public pieChartType = 'doughnut';
public pieChartLegend = true;
public pieChartData = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

OnClick()
  {
    this.router.navigate(['/cmp2'])
  }
  OnClick1()
  {
    this.router.navigate(['/doughnutchart'])
  }

  OnClick2()
  {
    this.router.navigate(['/linechart'])
  }


  ngOnInit(): void {
  }

}
