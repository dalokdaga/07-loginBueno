import { UsuarioModel } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyBR-5_yGOZNP3g6rGmfRn44m9MKQn-gqmQ';
  // Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //autenticación
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { }

  logout() {

  }

  login(usuario: UsuarioModel){
    const authData ={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signInWithPassword?key=${this.apikey}`,authData
    )
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData ={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signUp?key=${this.apikey}`,authData
    )
  }

}
