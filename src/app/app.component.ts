import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oliveira';
  images = []
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    await this.dataService.getData().subscribe((data: any) =>{
       this.images = data.carouselArray;
     })
   }
}
