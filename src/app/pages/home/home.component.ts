import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeInfo: any = {};
  images: any = [];
  whatslogo: string = '';
  whatsLink: string = '';
  redesSociais: any = []
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
       this.images = data.carouselArray;
       this.redesSociais = data.oliveiraInfo.redesSociais;
       this.whatsLink = data.oliveiraInfo.whatsLink;
       this.homeInfo = data.pageHome;
     })
   }

}
