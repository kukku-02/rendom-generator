import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  baseUrl:string="https://randomuser.me/api/"

  constructor(private http:HttpClient){}

  getUserAPI(){
    return this.http.get(this.baseUrl)
  }

}
