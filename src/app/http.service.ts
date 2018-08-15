import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL = "https://agile-hamlet-28702.herokuapp.com";
  constructor(private http: HttpClient) {}

  getLastDate(){
    return this.http.get( this.BASE_URL + "/dates/last", {});
  }
}
