import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  constructor(private router: Router) { 
    //this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.router.navigateByUrl('/login');
  }

}
