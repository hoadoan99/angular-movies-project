import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { IMAGES_SIZES } from '../../constants/image-size';
@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  imageSize = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.itemData);
  }
}
