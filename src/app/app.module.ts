import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { NavBarComponent } from './popular-movie/nav-bar/nav-bar.component';
import { MovieCardComponent } from './popular-movie/movie-card/movie-card.component';
import { GetMoviesService } from './get-movies.service';
import { PagnationComponent } from './popular-movie/pagnation/pagnation.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMovieComponent,
    NavBarComponent,
    MovieCardComponent,
    PagnationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [GetMoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
