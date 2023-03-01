import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
user:any
Reviews:any=[]
constructor(private api:ApiService){}


ngOnInit(): void {
  
if(localStorage.getItem("username")){
  this.user=  localStorage.getItem("username")||''
}

  // get all reviews
this.api.WatchedHistory(this.user)
.subscribe((result:any)=>{
  this.Reviews=result.review.reverse()
  console.log(this.Reviews);
  
})
}


}
