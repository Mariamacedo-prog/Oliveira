import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() activePage = '';
  showMenu = false;
  infoNav = {
    whats: "",
    whatsLogo: "",
    logo: ""
  };
  listItemsMenu: ListMenuType[] = [{name:'Home', link: '/'}, {name: 'Sobre a Oliveira',  link: '/sobre'}, {name: 'Empreendimentos',  link: '/empreendimentos'}, {name:  'Fale Conosco',  link: '/fale-conosco'}, {name:  'Portal do Cliente',  link: '/portal-cliente'}, {name:  'Contato',  link: '/contato'}]
  constructor( private router: Router) { }

  async ngOnInit() {
   
  }


}
