import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = 'dalokdaga@gmail.com'
  }

  onSubmit(){
    console.log("formulario enviado", this.usuario)
  }

}
