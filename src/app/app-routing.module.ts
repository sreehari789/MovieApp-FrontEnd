import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { DiaryComponent } from './diary/diary.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  // LoginPageComponent
  {
    path:"",component:LoginPageComponent
  },
  {
    path:"AllMovies",component:AllMoviesComponent
  },
  // ViewMovieComponent
  {
    path:"View-Movie/:id", component:ViewMovieComponent
  },
  {
    path:"Watchlist", component:WatchlistComponent
  },
  {path:"Diary", component:DiaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
