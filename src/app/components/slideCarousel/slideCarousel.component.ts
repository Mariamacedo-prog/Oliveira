import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';


interface carouselImage {
  img: string;
  alt: string;
  text: any;
  link: string;
} 

@Component({
  selector: 'app-slideCarousel',
  templateUrl: './slideCarousel.component.html',
  styleUrls: ['./slideCarousel.component.scss']
})
export class SlideCarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() textCenter = true;
  @Input() autoSlide = false;
  @Input() setIntervalTime = 5000;
  scrollX = 0;
  widthNum = 0;
  selectedIndex = 0;
  constructor(private scroller: ViewportScroller, private router: Router) { }


  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void{

  }

    logTouchstart(event:any){
    for (let i = 0; i < event.changedTouches.length; i++) {
      if(event.changedTouches[i].clientX < 100){
        this.handleLeftArrow ()
      }
      if(event.changedTouches[i].clientX > 271){
        this.handleRightArrow ()
      }
    }
  }

  selectItem(index: number): void{
    this.selectedIndex = index;
  }



  handleLeftArrow () {
    let x = this.scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    this.scrollX = x;

    console.log( this.scrollX)
  };

  handleRightArrow() {
    let x = this.scrollX - Math.round(window.innerWidth / 2);
    let listW = this.images.length * 450;
    console.log("teste 1", window.innerWidth , listW , x)
    if (window.innerWidth - listW > x) {
      console.log("teste 3", window.innerWidth , listW , x ,  "esse", window.innerWidth - listW - 60)
      x = window.innerWidth - listW - 60;
    }

    this.scrollX = x;

    console.log( this.scrollX)
  };
}
