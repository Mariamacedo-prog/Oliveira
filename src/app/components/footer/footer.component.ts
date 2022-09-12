import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  info: any = [];
  listMenu: any = [];
  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    await this.dataService.getData().subscribe((data: any) =>{
       this.info = data.oliveiraInfo;
       this.listMenu = data.listMenu;
       console.log(this.info, this.listMenu)
     })
   }

   goToStart(){
    document.documentElement.scrollTop = -2000;
  }

}
