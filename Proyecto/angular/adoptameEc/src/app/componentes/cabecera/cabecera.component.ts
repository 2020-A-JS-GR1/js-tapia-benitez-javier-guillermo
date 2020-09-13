import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()
  sesion: boolean;
  
  urlLogo = '../../../assets/img/Logo.png';

  constructor(
    private readonly _router: Router
  ) { }

  irARegistro() {
    const ruta = ['/registro'];
    this._router.navigate(ruta);
  }

  irALogin() {
    const ruta = ['/login'];
    this._router.navigate(ruta);
  }

  ngOnInit(): void {
  }

}
