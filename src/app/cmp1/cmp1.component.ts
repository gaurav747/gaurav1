import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {
 public  localArray = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {

   this.dataservice.getdata()
  .subscribe(data => this.localArray = data);
 /* .subscribe(data => { 
    console.log(data);
  });
*/

  }
}
