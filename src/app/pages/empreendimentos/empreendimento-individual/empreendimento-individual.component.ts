import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-empreendimento-individual',
  templateUrl: './empreendimento-individual.component.html',
  styleUrls: ['./empreendimento-individual.component.scss']
})
export class EmpreendimentoIndividualComponent implements OnInit {
  empreendimento: any = {};
  id: number = 0;
  imgBase64: any = {};
  statusArray = [
    {
      type: "PLANEJAMENTO",
      etapa: "1.ETAPA",
      stt: "Completo",
      icon: ""
    },
    {
      type: "CONSTRUÇÃO",
      etapa: "2.ETAPA",
      stt: "Completo",
      icon: ""
    },{
      type: "FINALIZANDO",
      etapa: "3.ETAPA",
      stt: "Em progresso",
      icon: ""
    },{
      type: "ENTREGUE",
      etapa: "4.ETAPA",
      stt: "Incompleto",
      icon: ""
    },
  ];

  openModal = false;
  imagesrcModal = '';
  constructor(private dataService: DataService,  protected  activatedRouter: ActivatedRoute, protected  router: Router) { 
    this.activatedRouter.params.subscribe(params => this.id = params['id']);
  }

  async ngOnInit(){
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
      let empreendimentos = data.pageEmpreendimentos.arrayEmpreendimentos;
      this.imgBase64 = data.image64;
      this.empreendimento = empreendimentos.find((item: any )=> item.id == this.id);
      if(this.empreendimento == undefined) {
        this.router.navigate(['/empreendimentos']);
        return;
      }
      this.getStatus();
    })

  }

  openModalFunc(src: string){
    this.imagesrcModal = src;
    this.openModal = true;
  }

  stringToHTML (str: string) {
    let example = document.getElementById('localizacao');
    if(example !== null){
      example.innerHTML = str;
    }
  };

  getStatus(){
    if(this.empreendimento.status === "EM ANDAMENTO"){
      this.statusArray = [
        {
          type: "PLANEJAMENTO",
          etapa: "1.ETAPA",
          stt: "Completo",
          icon: this.imgBase64.correctArrowWhite
        },
        {
          type: "CONSTRUÇÃO",
          etapa: "2.ETAPA",
          stt: "Em progresso",
          icon: this.imgBase64.time
        },{
          type: "FINALIZANDO",
          etapa: "3.ETAPA",
          stt: "Incompleto",
          icon: this.imgBase64.closeWhite
        },{
          type: "ENTREGUE",
          etapa: "4.ETAPA",
          stt: "Incompleto",
          icon: this.imgBase64.closeWhite
        },
      ];
    }

    if(this.empreendimento.status === "FUTURO LANÇAMENTO"){
      this.statusArray = [
        {
          type: "PLANEJAMENTO",
          etapa: "1.ETAPA",
          stt: "Em progresso",
          icon: this.imgBase64.time
        },
        {
          type: "CONSTRUÇÃO",
          etapa: "2.ETAPA",
          stt: "Incompleto",
          icon: this.imgBase64.closeWhite
        },{
          type: "FINALIZANDO",
          etapa: "3.ETAPA",
          stt: "Incompleto",
          icon: this.imgBase64.closeWhite
        },{
          type: "ENTREGUE",
          etapa: "4.ETAPA",
          stt: "Incompleto",
          icon: this.imgBase64.closeWhite
        },
      ];
    }

    if(this.empreendimento.status === "ENTREGUE"){
      this.statusArray = [
        {
          type: "PLANEJAMENTO",
          etapa: "1.ETAPA",
          stt: "Completo",
          icon: this.imgBase64.correctArrowWhite
        },
        {
          type: "CONSTRUÇÃO",
          etapa: "2.ETAPA",
          stt: "Completo",
          icon: this.imgBase64.correctArrowWhite
        },{
          type: "FINALIZANDO",
          etapa: "3.ETAPA",
          stt: "Completo",
          icon: this.imgBase64.correctArrowWhite
        },{
          type: "ENTREGUE",
          etapa: "4.ETAPA",
          stt: "Completo",
          icon: this.imgBase64.correctArrowWhite
        },
      ];
    }
  }
}
