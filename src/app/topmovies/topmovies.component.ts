import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {
  list;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesList();
  }

  getMoviesList(): void {
    this.moviesService.getApi()
      .subscribe(
        response => (this.list = response['movies']),
        error => (console.log('Ups! we have an error: ', error))
      );
  }

}
