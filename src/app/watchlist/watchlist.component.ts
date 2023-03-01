import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
user:any
movies:any=[]
title:string=''
wishlistStatus=''
  constructor(private api:ApiService){}

ngOnInit(): void {
 
  if(localStorage.getItem("username")){
    this.user=  localStorage.getItem("username")||''
  
  }

this.api.getWatchlist(this.user)
.subscribe((result:any)=>{
  this.movies=result.movie
  if(this.movies.length==0){
    this.wishlistStatus="wishlist empty"
  }  
  
},
(result:any)=>{
  if(result.error.message) {
    this.wishlistStatus=''
  
  }
    }
)

}
removeWatchlist(user:any,title:any){
  this.title=this.movies.Title
  
  this.api.removeWatchlist(user,title)
  .subscribe((result:any)=>{
    console.log(result.movie);
    this.movies=result.movie
    if(this.movies.length==0){
      this.wishlistStatus='wishlist empty'
    }

  })
}

}
