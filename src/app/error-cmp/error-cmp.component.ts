import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-error-cmp',
  templateUrl: './error-cmp.component.html',
  styleUrls: ['./error-cmp.component.css']
})
export class ErrorCmpComponent implements OnInit {

  constructor(private dataservice2: Data2Service) { }
  public LocalArray3:any = [];
  ngOnInit(): void {

    this.dataservice2.getinfo().subscribe(data =>  this.LocalArray3 = data);

  }

}
