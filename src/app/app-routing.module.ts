import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';

const routes: Routes = [
  { path: '', component: PopularMovieComponent },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
