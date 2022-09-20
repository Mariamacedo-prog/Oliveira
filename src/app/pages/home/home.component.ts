import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeInfo = {};
  images = [];
  redesSociais = []
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    await this.dataService.getData().subscribe((data: any) =>{
       this.images = data.carouselArray;
       this.redesSociais = data.oliveiraInfo.redesSociais;
       this.homeInfo = data.pageHome;
     })
   }

}
