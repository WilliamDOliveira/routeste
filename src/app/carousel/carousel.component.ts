import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
    (<any>$('.slider')).slick({
      'slidesToShow': 2,
      'slidesToScroll': 2,
      'autoplay': false,
      // 'fade': true, //Aparece somente 1 slider
      'dots': true,
      'arrows': true
    });
  }


}


