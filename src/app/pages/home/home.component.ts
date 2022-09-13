import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularmovies: Movie[] = [];
  upcomingMovie: Movie[] = [];
  toprateMovie: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // popular
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularmovies = movies;
    });
    // upcoming
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovie = movies;
    });
    // toprate
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.toprateMovie = movies;
    });
  }
}
