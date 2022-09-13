import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genresId: string | null = null;
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genresId }) => {
      if (genresId) {
        this.genresId = genresId;
        this.getMoviesByGenres(genresId, 1);
      } else {
        this.getPageMovie(1);
      }
    });
  }
  getPageMovie(page: number) {
    this.movieService.searchMovie(page).subscribe((movie) => {
      return (this.movies = movie);
    });
  }
  paginate(event: any) {
    if (this.genresId) {
      this.getMoviesByGenres(this.genresId, event.page + 1);
    } else {
      this.getPageMovie(event.page + 1);
    }
  }
  getMoviesByGenres(genresId: string, page: number) {
    this.movieService.getMoviesByGenres(genresId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
