import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
type ListMenuType ={
  name: string,
  link: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() activePage = 'Home';
  iconSrcMenu = ""
  showMenu = false;
  infoNav = {
    whats: "",
    whatsLogo: "",
    logo: ""
  };
  listItemsMenu: ListMenuType[] = []
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    await this.dataService.getData().subscribe((data: any) =>{
       this.listItemsMenu = data.listMenu;
       this.infoNav = data.oliveiraInfo;
       this.iconSrcMenu = data.image64.menu;
     })
   }


}
