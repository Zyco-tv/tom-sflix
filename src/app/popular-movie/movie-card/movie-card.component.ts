import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() Movies: any;
  IMG_URL = 'https://image.tmdb.org/t/p/w500';
  constructor() {}

  ngOnInit(): void {}

  getColor(vote: number) {
    return { green: vote >= 8, orange: 8 > vote && vote >= 5, red: vote < 5 };
  }
}
