import { AuthService } from './../../services/auth.service';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false; 
  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm){
    if( form.invalid){return;}
    Swal.fire({                    
      icon: 'info',      
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {
        this.router.navigateByUrl('/home');
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('email',this.usuario.email);          
        }

      },(err) =>{
        Swal.fire({                    
          icon: 'error',
          title: 'Error al registrar',
          text: err.error.error.message                
        });
      });
  }

}
