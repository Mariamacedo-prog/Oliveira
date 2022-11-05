import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-plantas',
  templateUrl: './slide-plantas.component.html',
  styleUrls: ['./slide-plantas.component.scss']
})
export class SlidePlantasComponent implements OnInit {
  arrowLeft = "data:image/png;base64,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"

  arrowRightIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeF7t3VusbWdVB/A/qKlCgxcoqIBgW0q4VEyMQQleKBYFSo2KGJ8Q0BAikRhjxIRgkIQgiEYxxBhu+qJEQ1JDiDdaRAwV9QEo2NZSUYQWWiKoEMAHzIQFbc+le6115vzm+Ob3Oy99OGvNMcZvfKfzv9dea+97xB8CBAgQIEBgOIF7DDexgQkQIECAAIEIAA4BAQIECBAYUEAAGHDpRiZAgAABAgKAM0CAAAECBAYUEAAGXLqRCRAgQICAAOAMECBAgACBAQUEgAGXbmQCBAgQICAAOAMECBAgQGBAAQFgwKUbmQABAgQICADOAAECBAgQGFBAABhw6UYmQIAAAQICgDNAgAABAgQGFBAABly6kQkQIECAgADgDBAgQIAAgQEFBIABl25kAgQIECAgADgDBAgQIEBgQAEBYMClG5kAAQIECAgAzgABAgQIEBhQQAAYcOlGJkCAAAECAoAzQIAAAQIEBhQQAAZcupEJECBAgIAA4AwQIECAAIEBBQSAAZduZAIECBAgIAA4AwQIECBAYEABAWDApRuZAAECBAgIAM4AAQIECBAYUEAAGHDpRiZAgAABAgKAM0CAAAECBAYUEAAGXLqRCRAgQICAAOAMECBAgACBAQUEgAGXbmQCBAgQICAAOAMECBAgQGBAAQFgwKUbmQABAgQICADOAAECBAgQGFBAABhw6UYmQIAAAQICgDNAgAABAgQGFBAABly6kQkQIECAgADgDBAgQIAAgQEFBIABl25kAgQIECAgADgDBAgQIEBgQAEBYMClG5kAAQIECAgAzgABAgQIEBhQQAAYcOlGJkCAAAECAoAzQIAAAQIEBhQQAAZcupEJECBAgIAA4AwQIECAAIEBBQSAAZduZAIECBAgIAA4AwQIECBAYEABAWDApRuZAAECBAgIAM4AAQIECBAYUEAAGHDpRiZAgAABAgKAM0CAAAECBAYUEAAGXLqRCRAgQICAAOAMECBAgACBAQUEgAGXbmQCBAgQICAAOAMECBAgQGBAAQFgwKUbmQABAgQICADOAAECBAgQGFBAABhw6UYmQIAAAQICgDNAgAABAgQGFBAABly6kQkQIECAgADgDBAgQIAAgQEFBIABl25kAgQIECAgADgDBAgQIEBgQAEBYMClG5kAAQIECAgAzgABAgQIEBhQQAAYcOlGJkCAAAECAoAzQIAAAQIEBhQQAAZcupEJECBAgIAA4AwQIECAAIEBBQSAAZduZAIECBAgIAA4AwQIECBAYEABAWDApRuZAAECBAgIAM4AAQIECBAYUEAAGHDpRiZAgAABAgKAM0CAAAECBAYUEAAGXLqRCRAgQICAAOAMECBAgACBAQUEgAGXbmQCBAgQICAAOAMECBAgQGBAAQFgwKUbmQABAgQICADOAAECBAgQGFBAABhw6UYmQIAAAQICgDNAgAABAgQGFBAABly6kQkQIECAgADgDBAgQIAAgQEFBIABl25kAgQIECAgADgDBAgQIEBgQAEBYMClG5kAAQIECAgAzgABAgQIEBhQQAAYcOlGJkCAAAECAoAzQIAAAQIEBhQQAAZcupEJECBAgIAA4AwQIECAAIEBBQSAAZduZAIECBAgIAA4AwQIECBAYEABAWDApRuZAAECBAgIAM4AAQIECBAYUEAAGHDpRiZAgAABAgKAM0CAAAECBAYUEAAGXLqRCRAgQICAAOAMECBAgACBAQUEgAGXbmQCBAgQICAAOAMECBAgQGBAAQFgwKUbmQABAgQICADOAAECBAgQGFBAABhw6UYmQIAAAQICgDNAgAABAgQGFBAABly6kQkQIECAgADgDBAgQIAAgQEFBIABl25kAgQIECAgADgDBAgQIEBgQAEBYMClG5kAAQIECAgAzgABAgQIEBhQQAAYcOlGJkCAAAECAoAzQIAAAQIEBhQQAAZcupEJECBAgIAA4AwQIECAAIEBBQSAAZduZAIECBAgIAA4AwQIECBAYEABAWDApRuZAAECBAgIAM4AAQIECBAYUEAAGHDpRiZAgAABAgKAM0CAAAECBAYUEAAGXLqRCRAgQICAAOAMECBAgACBAQUEgAGXbmQCBAgQICAAOAMECBAgQGBAAQFgwKUbmQABAgQICADOAAECBAgQGFBAABhw6UYmQIAAAQICgDNAgAABAgQGFBAABly6kQkQIECAgADgDBAgQIAAgQEFBIABl25kAgQIECAgADgDBAgQIEBgQAEBYMClG5kAAQIECAgAzgABAgQIEBhQQAAYcOlGJkCgvMB5SR6b5HuTXJLkvknuneRTSW5J8oEkf5fk/Um+UH4aDZYUEABK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";

  
  @Input() images: any[] = [];
  @Input() controls = true;
  @Input() heightSlider: number = 400;
  @Input() mouseInImage = false;

  itemAtual = 0;
  seeItemvalue = 0;
  scrollX = 0;
  selectedIndex = 0;
  handleLeftArrow (){

    if(this.itemAtual <= this.images.length  && this.itemAtual !== 0){
      this.itemAtual--;
    }else{
      this.itemAtual = 0;
    }
  };



  seeItem(item: number){
    this.seeItemvalue = item
  }

  handleRightArrow (){
    if(this.itemAtual >= 0 && this.itemAtual <= this.images.length - 1){
      this.itemAtual++
    }else{
      this.itemAtual = this.images.length - 1;
    }
  };
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

  constructor() { }

  ngOnInit(): void {

  }

  selectItem(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex --;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex ++;
    }
  }
  
}
