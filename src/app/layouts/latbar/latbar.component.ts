import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latbar',
  templateUrl: './latbar.component.html',
  styleUrls: ['./latbar.component.css']
})
export class LatbarComponent implements OnInit {
  muestraUsuarios:boolean;
  muestaModulos:boolean;
  nombre:string;
  constructor() { }

  ngOnInit() {
    this.muestraUsuarios = false;
    this.muestaModulos = false;
    this.nombre = "Daniel Garcia"
  }

  oculta(){
    this.muestraUsuarios = !this.muestraUsuarios;
    this.muestaModulos = false;
  }
  ocultaModulo(){
    this.muestaModulos = !this.muestaModulos;
    this.muestraUsuarios = false;
  }
}
