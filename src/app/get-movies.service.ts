import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  API_KEY = 'api_key=acef080d8c7e59bae824e1568bc7f51b';
  BASE_URL = 'https://api.themoviedb.org/3';
  API_URL = this.BASE_URL + '/movie/popular?' + this.API_KEY;
  SEARCH_URL = this.BASE_URL + '/search/movie?' + this.API_KEY;
  SEARCH_WITH_QUERY = ' ';

  last_URL = this.API_URL;
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getSearchResult(search: any): Observable<any> {
    if (search == '') {
      return this.http.get<any>(this.API_URL);
    }
    this.SEARCH_WITH_QUERY = this.SEARCH_URL + '&query=' + search;
    return this.http.get<any>(this.SEARCH_WITH_QUERY);
  }

  pageCall(event: { current: number; case: any }): Observable<any> {
    if (event.case == 'search') {
      this.last_URL = this.SEARCH_WITH_QUERY;
    } else {
      this.last_URL = this.API_URL;
    }
    let urlSplit = this.last_URL.split('?');
    let queryParams = urlSplit[1].split('&');
    let key = queryParams[queryParams.length - 1].split('=');
    if (key[0] != 'page') {
      let url = this.last_URL + '&page=' + event.current;
      return this.http.get(url);
    } else {
      key[1] = event.current.toString();
      let a = key.join('=');
      queryParams[queryParams.length - 1] = a;
      let b = queryParams.join('&');
      let url = urlSplit[0] + '?' + b;
      return this.http.get(url);
    }
  }

  getMovieDetails(id: string): Observable<any> {
    let detailsURL = this.BASE_URL + '/movie/' + id + '?' + this.API_KEY + '&language=fr-FR';
    return this.http.get<any>(detailsURL);
  }
}
