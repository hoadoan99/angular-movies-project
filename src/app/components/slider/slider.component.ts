import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { IMAGES_SIZES } from '../../constants/image-size';
import { state, style, trigger, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  // slider
  currentSlideIndex: number = 0;
  imageSize = IMAGES_SIZES;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 4000);
    }
  }
}
