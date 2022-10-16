import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-empreendimentos',
  templateUrl: './empreendimentos.component.html',
  styleUrls: ['./empreendimentos.component.scss']
})
export class EmpreendimentosComponent implements OnInit {
  empreendimentoFilter: any = [];
  empreendimentos: any = [];
  pageInfo: any = {};
  images: any = [];
  whatsLink: string = '';
  endereco: any = {};
  image64: any = {};
  activeOption = 'TODOS';
  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
      this.images = data.carouselArray;
      this.pageInfo = data.pageEmpreendimentos;
      this.whatsLink = data.oliveiraInfo.whatsLink;
      this.endereco = data.oliveiraInfo.endereco;
      this.image64 = data.image64;

      this.empreendimentoFilter = data.pageEmpreendimentos.arrayEmpreendimentos;
      this.empreendimentos = data.pageEmpreendimentos.arrayEmpreendimentos;
    })
  }

  filterEmpreendimento(status: string){
    this.activeOption = status;

    if(status === 'TODOS'){
      this.empreendimentoFilter = this.empreendimentos;
    }else{
      let result = this.empreendimentos.filter((item: any) => item.status === status);
      console.log(result);

      this.empreendimentoFilter = result;
    }

  }

}
