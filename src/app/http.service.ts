import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL = "https://agile-hamlet-28702.herokuapp.com";
  constructor(private http: HttpClient) {}

  getLastDate(){
    return this.http.get<string>( this.BASE_URL + "/dates/last", {});
  }

  getMovieList(){
    return this.http.get<string>( this.BASE_URL + "/movies/getall", {});
  }
}
