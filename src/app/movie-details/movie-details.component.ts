import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  id: any;
  title: string = '';
  poster_path: string = '';
  vote_average: number = 0;
  overview: string = '';
  genres: any;
  release_date: string = '';
  vote_count: number = 0;
  adult: boolean = false;
  IMG_URL = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private route: ActivatedRoute,
    private Service: GetMoviesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((prams) => {
      this.id = prams.get('id');

      this.Service.getMovieDetails(this.id).subscribe((res) => {
        this.title = res.title;
        this.poster_path = res.poster_path;
        this.vote_average = res.vote_average;
        this.overview = res.overview;
        this.genres = res.genres;
        this.release_date = res.release_date;
        this.vote_count = res.vote_count;
        this.adult = res.adult;
      });
    });
  }
}
