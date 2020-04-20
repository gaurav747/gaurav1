import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceEx } from './InterfaceEx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
constructor(private http: HttpClient) { }
private url: string = "assets/data/data.json";
//url = "";

  getdata(): Observable<InterfaceEx[]>
  {
    return this.http.get<InterfaceEx[]>(this.url);
  }
}
