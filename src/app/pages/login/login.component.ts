import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel();
  recordarme = false;   
  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');      
      this.recordarme = true;
    }
  }  

  login(form: NgForm){
    if( form.invalid){return;}
    Swal.fire({                    
      icon: 'info',      
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    this.auth.login(this.usuario)
      .subscribe(resp =>{
        if (this.recordarme) {
          localStorage.setItem('email',this.usuario.email);          
        }
        console.log(this.auth.getId())
        this.router.navigateByUrl('/home');
        Swal.close();
      },(err) =>{
        Swal.fire({                    
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message                
        });
      })
      
   }

}
