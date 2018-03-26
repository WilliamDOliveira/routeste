import * as slick from 'slick-carousel';
import * as $ from 'jquery';

export interface Slick {
  slick: slick;
  (behavior: 'enable'): JQuery;
}

export interface JQuery {
  slick: slick;
}

// $.fn.slick = function (this: JQuery): JQuery {
//   return this;
// };
