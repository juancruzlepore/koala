import { Component } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  lastDate: Date;
  title = 'koala';
  constructor(private httpService: HttpService){
    this.httpService.getLastDate().subscribe((data: string) => this.lastDate = new Date(data));
  }

}
