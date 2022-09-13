import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES_SIZES } from 'src/app/constants/image-size';
import { first } from 'rxjs';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  // movieVideo:
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  imageSize = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieSimilar(id);
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }
  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;

      // console.log(this.movie);
    });
  }
  getMovieVideo(id: string) {
    this.movieService.getMovieVideos(id).subscribe((moviVideoData) => {
      this.movieVideos = moviVideoData;
      // console.log(this.movieVideos);
    });
  }
  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((moviImageData) => {
      this.movieImages = moviImageData;
      // console.log(this.movieImages);
    });
  }
  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe((movieCreditData) => {
      this.movieCredits = movieCreditData;
    });
  }
  getMovieSimilar(id: string) {
    this.movieService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }
}
