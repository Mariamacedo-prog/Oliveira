import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Input() myCallback!: Function;

  activeOption="novoCliente";
  formData = new FormGroup(
    {
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      messages: new FormControl("", Validators.required)
    }
  )

  constructor() { }

  ngOnInit(): void {
  }
}
