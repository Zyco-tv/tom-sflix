import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css'],
})
export class PopularMovieComponent implements OnInit {
  movies: any;
  current: number = 1;
  totalpages: number = 1;
  case: string = ' ';

  constructor(private Service: GetMoviesService) {}
  ngOnInit() {
    this.Service.getMovies().subscribe((r) => {
      this.movies = r.results;
      this.current = r.page;
      this.totalpages = r.total_pages;
      this.case = 'popular';
    });
  }

  searchMovies(searchValue: any) {
    this.Service.getSearchResult(searchValue).subscribe((r) => {
      this.current = r.page;
      this.movies = r.results;
      this.totalpages = r.total_pages;
      this.case = 'search';
    });
  }

  getNextPage(event: { current: number; case: any }) {
    let Event = {
      current: event.current + 1,
      case: event.case,
    };
    this.Service.pageCall(Event).subscribe((res) => {
      this.movies = res.results;
      this.current = res.page;
    });
  }
  getPrevPage(event: { current: number; case: any }) {
    let Event = {
      current: event.current - 1,
      case: event.case,
    };
    this.Service.pageCall(Event).subscribe((res) => {
      this.movies = res.results;
      this.current = res.page;
    });
  }
}
