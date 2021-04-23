import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm){
     if( form.invalid){return;}
    this.auth.login(this.usuario)
      .subscribe(resp =>{
        console.log(resp)
      },(err) =>{
        console.log(err.error.error.message);
      })
   }

}
