import { Component } from '@angular/core';
import {HttpService} from './http.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {

  constructor(){
  }


}
