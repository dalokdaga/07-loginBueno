import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { TituloComponent } from './components/titulo/titulo.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'registro', component: RegistroComponent, canActivate:[ LoginGuard ] },
  { path: 'login'   , component: LoginComponent, canActivate:[ LoginGuard ] },
  { path: 'titulo'   , component: TituloComponent, canActivate:[ AuthGuard ]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
