import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutInfo: any = {};
  images: any = [];
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit(){
    await this.dataService.getData().subscribe((data: any) =>{
      this.images = data.carouselArray;
      this.aboutInfo = data.pageSobre;
    })

  }

}
