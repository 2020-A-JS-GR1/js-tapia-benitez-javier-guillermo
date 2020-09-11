import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  urlLogo = '../../../assets/img/Logo.png';
  textoBoton1 = 'Registrarse';
  textoBoton2 = 'Iniciar Sesion';

  constructor() { }

  ngOnInit(): void {
  }

}
