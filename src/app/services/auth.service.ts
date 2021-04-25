import { UsuarioModel } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyBR-5_yGOZNP3g6rGmfRn44m9MKQn-gqmQ';
  userToken: string;
  // Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //autenticación
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) {
    this.leerToken()
   }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel){
    const authData ={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signInWithPassword?key=${this.apikey}`,authData
    ).pipe(      
      map( resp =>{
        console.log('entro en el map del RXJS')
        this.guardarToken(resp['idToken'],parseInt(resp['expiresIn']));
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData ={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signUp?key=${this.apikey}`,authData
    ).pipe(      
      map( resp =>{
        console.log('entro en el map del RXJS')
        this.guardarToken(resp['idToken'],parseInt(resp['expiresIn']));
        return resp;
      })
    );
  }

  private guardarToken (idToken: string,expira: number){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);

    // calcula hora de expiración
    let hoy = new Date();
    hoy.setSeconds( expira );
    localStorage.setItem('expira', hoy.getTime().toString())
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }


  estaAutenticado(): boolean{
    if(this.userToken.length< 2){
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    }else{
      return false;
    }
  }


}
