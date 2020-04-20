import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lin-chart',
  templateUrl: './lin-chart.component.html',
  styleUrls: ['./lin-chart.component.css']
})
export class LinChartComponent implements OnInit {

  constructor(private router: Router) { }


  
  public linChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public linChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public linChartType = 'line';
  public linChartLegend = true;
  public linChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  
  OnClick()
    {
      this.router.navigate(['/cmp2'])
    }

    OnClick1()
    {
      this.router.navigate(['/barchart'])
    }

  ngOnInit(): void {
  }

}
