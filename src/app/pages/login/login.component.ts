import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel;

  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  login(form: NgForm){
    if( form.invalid){return;}

    this.auth.login(this.usuario)
      .subscribe(resp =>{
        console.log(resp)
        this.router.navigateByUrl('/home');
      },(err) =>{
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error al autenticar',
        //   text: err.error.error.message
        // });
      })
   }

}
