import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL = "https://agile-hamlet-28702.herokuapp.com";
  // BASE_URL = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getLastDate(){
    return this.http.get<string>( this.BASE_URL + "/dates/last", {});
  }

  getMovieList(){
    return this.http.get<string>( this.BASE_URL + "/movies/all", {});
  }

  addDate(dateStart: Date, dateEnd: Date): Observable<string> {
    return this.http.post(this.BASE_URL + "/dates/add", {
      dateStart: formatDate(dateStart, "yyyy-MM-dd HH:mm", "en-US"),
      dateEnd: formatDate(dateEnd, "yyyy-MM-dd HH:mm", "en-US")
    }) as Observable<string>;
  }
}
