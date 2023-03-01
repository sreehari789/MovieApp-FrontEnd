import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
user:string=''
  movies:any=[]
  
  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.getAllMovies()
    .subscribe((result:any)=>{
      this.movies=result.movies
      console.log(this.movies);
      
      if(localStorage.getItem("username")){
        this.user=  localStorage.getItem("username")||''

      }
    })

  }

  signOut(){
    localStorage.removeItem("username")
this.router.navigateByUrl('')
  }
  
  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
