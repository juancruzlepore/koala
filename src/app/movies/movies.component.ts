import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css', '../app.component.css']
})
export class MoviesComponent implements OnInit {
  title = "Pelis para mirar";
  movieList: Movie[] = [];
  constructor(private http: HttpService) {
    // Object.assign(this.movieList, JSON.parse("[{\"creationDate\":\"2018-08-15T21:23:19.950401Z\",\"addedBy\":\"Juan\",\"name\":\"Ant-man\",\"seen\":false}," +
    //   "{\"creationDate\":\"2018-08-15T21:23:19.950401Z\",\"addedBy\":\"Juan\",\"name\":\"Ant-man 2\",\"seen\":false}]"));
    http.getMovieList().subscribe(resp => Object.assign(this.movieList, JSON.parse(resp)));
  }

  ngOnInit() {

  }

}
