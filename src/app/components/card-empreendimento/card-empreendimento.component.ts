import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-card-empreendimento',
  templateUrl: './card-empreendimento.component.html',
  styleUrls: ['./card-empreendimento.component.scss']
})
export class CardEmpreendimentoComponent implements OnInit {
  @Input() image: any = {};
  imgIcon = '';
  link = `/empreendimentos/`;
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    await this.dataService.getData().subscribe((data: any) =>{
      this.imgIcon = data.image64.gota;
    })
  }

}

