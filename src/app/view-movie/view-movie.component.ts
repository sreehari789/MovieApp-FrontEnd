import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {
  Ratings:any=[]
  user:any=''
  movie:any=[]
  movieId:any
  movieTitle:any
  Reviews:any=[]
  currentRate = 0;
  reviewDate:any
  mtitle:any
constructor(private api:ApiService, private activatedRoute:ActivatedRoute, private fb:FormBuilder,private router:Router){
  
}

ngOnInit(): void {


  this.activatedRoute.params
  .subscribe((data:any)=>{
    this.movieId=data['id']
  })

  // viewmovie
this.api.viewMovie(this.movieId)
.subscribe((result:any)=>{
this.movie=result.movie
  // ........................................................
  this.mtitle=this.movie.Title
console.log(this.mtitle);

this.Ratings=this.movie.Ratings[1]

localStorage.setItem("movieTitle",this.movie.Title)


})


if(localStorage.getItem("movieTitle")){
  this.movieTitle=  localStorage.getItem("movieTitle")||''

}

// get all reviews
this.api.getAllreview(this.movieTitle)
.subscribe((result:any)=>{
  this.Reviews=result.review
  console.log(this.Reviews);
  
})



if(localStorage.getItem("username")){
  this.user=  localStorage.getItem("username")||''

}

this.reviewDate=new Date().toISOString().slice(0,10)

}

// addtowishlist
addToWishlist(){
  this.api.addToWishlist(this.user,this.movie)
  .subscribe((result:any)=>{
alert(result.message)

})
    
}

ReviewForm=this.fb.group({
  mReview:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
})

// post review
postReview(){
  console.log(this.reviewDate);
  console.log(this.mtitle);
  let mReview=this.ReviewForm.value.mReview
this.api.postReview(this.user, this.mtitle,mReview,this.currentRate,this.reviewDate)
.subscribe((result:any)=>{
  alert(result.message)
  window.location.reload();
},
(result:any)=>{
  alert(result.error.message)
  window.location.reload();
  }
)

}




}


