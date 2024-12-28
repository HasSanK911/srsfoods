import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    { image: '../../assets/frontside.jpg', title: 'Front Side' },
    { image: '../../assets/backside.jpg', title: 'Back Side' },
  ];
}
