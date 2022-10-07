import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-empreendimentos',
  templateUrl: './empreendimentos.component.html',
  styleUrls: ['./empreendimentos.component.scss']
})
export class EmpreendimentosComponent implements OnInit {
  pageInfo: any = {};
  images: any = [];
  whatsLink: string = '';
  endereco: any = {};
  image64: any = {};
  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
      this.images = data.carouselArray;
      this.pageInfo = data.pageEmpreendimentos;
      this.whatsLink = data.oliveiraInfo.whatsLink;
      this.endereco = data.oliveiraInfo.endereco;
      this.image64 = data.image64;
    })
  }

}
