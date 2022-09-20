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

  selectItem(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(){
    const theDiv = document.querySelector('#thediv');
    this.scroller.scrollToPosition([300, 100]);
    console.log(theDiv)
    if(theDiv !== null){
      theDiv.scrollLeft = 2000;
    }

    // if(this.selectedIndex === 0){
    //   this.selectedIndex = this.images.length - 1;
    // }else{
    //   this.selectedIndex --;
    // }
  }

  onNextClick(){
    const theDiv = document.querySelector('#thediv');
    console.log(theDiv)
    if(theDiv !== null){
      theDiv.scrollLeft = 2000;
    }

    // if(this.selectedIndex === this.images.length - 1){
    //   this.selectedIndex = 0;
    // }else{
    //   this.selectedIndex ++;
    // }
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
