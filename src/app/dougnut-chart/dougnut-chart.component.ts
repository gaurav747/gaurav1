import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dougnut-chart',
  templateUrl: './dougnut-chart.component.html',
  styleUrls: ['./dougnut-chart.component.css']
})
export class DougnutChartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


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
      this.router.navigate(['/barchart'])
    }
}
