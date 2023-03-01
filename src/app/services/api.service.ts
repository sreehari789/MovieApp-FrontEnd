import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

// Register
register(mailId:any,uname:any,pswd:any){
const body={
  mailId,
  uname,
  pswd
}
// server call to register and respond to loginpage component
 return this.http.post('http://localhost:3000/register',body)
}


  // login
login(uname:any,pswd:any){
  const body={
    uname,
    pswd
  }
 return this.http.post('http://localhost:3000/login',body)
}

 // all movies api
 getAllMovies(){
  return this.http.get('http://localhost:3000/all-movies')
 }
 
//  viewMovie api
 viewMovie(movieId:any){
 return this.http.get('http://localhost:3000/view-movie/'+movieId)
 }

//  addToWatchlist
 addToWishlist(user:any,movie:any){
  const body={
    user,
    movie
  }
  return this.http.post('http://localhost:3000/addToWishlist',body)
 }

//  getWatchlist
getWatchlist(user:any){
  return this.http.get('http://localhost:3000/get-Watchlist/'+user)
}

// removeWatchlist
removeWatchlist(user:any,title:any){

  const body={
    user,
    title
  }
  return this.http.post('http://localhost:3000/remove-Watchlist',body)

}

getAllreview(movieTitle:any){
 const body={
  movieTitle
 }
  return this.http.put('http://localhost:3000/getAll-review',body)

}

// post review
postReview(user:any,mtitle:any,review:any,currentRate:any,reviewDate:any){

  const body={
    user,
    mtitle,
    review,
    currentRate,
    reviewDate
  }
  return this.http.post('http://localhost:3000/post-review',body)
}

// Watched history
WatchedHistory(user:any){
  return this.http.get('http://localhost:3000/Watched-history/'+user)

}

}
