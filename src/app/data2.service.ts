import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from  './Countries';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private http1: HttpClient) { }
  url1 = "https://api.covid19api.com/summary";

  getinfo(): Observable<Countries[]>{
    return this.http1.get<Countries[]>(this.url1);
  }
}
