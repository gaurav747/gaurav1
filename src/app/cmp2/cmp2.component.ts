import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {
  public LocalArray2:any =[];
  constructor(private dataservice2: Data2Service, private router: Router) { }

  ngOnInit() {
this.getdata();  
      
  }
//------IMP----------------------------------------------------------------------------------- 
  getdata():any{
    try {
      this.dataservice2.getinfo().subscribe(data1 =>{
        this.LocalArray2 =data1["Countries"];
        console.log(data1);

      },err=>{
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  }
//---IMP------------------------------------------------------------------
  OnClick()
  {
    this.router.navigate(['/map'])
  }

  OnClick1()
  {
    this.router.navigate(['/barchart'])
  }
}
