import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss']
})
export class FaleConoscoComponent implements OnInit {
  faleInfo: any = {};
  endereco: any = {};
  whatsLink: string = '';
  locatioImg: string = '';
  activeOption="Novo Cliente";

  formData = new FormGroup(
    {
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      telefone: new FormControl("", Validators.required),
      messages: new FormControl("", Validators.required)
    }
  )

  constructor(private router: Router, private http: HttpClient ,private dataService: DataService) { 
    
  }

  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
    await this.dataService.getData().subscribe((data: any) =>{
      this.faleInfo = data.pageFaleConosco;
      this.whatsLink = data.oliveiraInfo.whatsLink;
      this.endereco = data.oliveiraInfo.endereco;
      this.locatioImg = data.image64.location;
    })

  }

  onSubmit() {
      const email = this.formData.getRawValue();
      email.messages = ` 
      ${this.activeOption}
      Telefone: ${email.telefone} 
      Mensagem: ${ email.messages }
      `;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post(this.faleInfo.emailSend,
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            this.formData.patchValue({
              telefone: '',
              name: '',
              email:  '',
              messages: ''
            })
          }
        );
  }

  maskTelefone(){
    let telefone1 = this.formData.getRawValue().telefone.replace(/[^0-9]/g,"").substring(0, 11);
    telefone1=telefone1.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    telefone1=telefone1.replace(/(\d)(\d{4})$/,"$1-$2"); 
    this.formData.patchValue({
      telefone: telefone1
    })
  }
}
