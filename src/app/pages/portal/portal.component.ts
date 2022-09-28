import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  portalInfo: any = {};
  whatsLink: string = '';
  txtPrincipal: string = '';
  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit(){
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
      this.portalInfo = data.pagePortal;
      this.whatsLink = data.oliveiraInfo.whatsLink;
      this.stringToHTML(data.pagePortal.textPrincipal)
      
    })

  }

  stringToHTML (str: string) {
    let example = document.getElementById('txtPrincipalPortal');
    if(example !== null){
      example.innerHTML = str
    }
  };

}
