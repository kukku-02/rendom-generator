import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-genarator',
  imports: [],
  templateUrl: './genarator.html',
  styleUrl: './genarator.css',
})
export class Genarator implements OnInit {

  random:any[]=[]

  constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getUsers()
  }

  btnClick(){
    this.getUsers()
  }

  getUsers(){
    this.api.getUserAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.random=res.results
        
      },
      error:(err:any)=>{
        console.log("error in api fetching"+err);
        
      }
    })
  }
}
