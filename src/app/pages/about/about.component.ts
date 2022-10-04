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
  whatsLink: string = '';
  endereco: any = {};
  locatioImg = '';
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit(){
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
      this.images = data.carouselArray;
      this.aboutInfo = data.pageSobre;
      this.whatsLink = data.oliveiraInfo.whatsLink;
      this.endereco = data.oliveiraInfo.endereco;
      this.locatioImg = data.image64.location;
    })

  }

}
