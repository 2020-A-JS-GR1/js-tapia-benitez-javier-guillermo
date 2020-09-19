import { RolService } from './../../../servicios/http/rol.service';
import { Rol } from './../../../modelos/rol';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-crear-rol',
  templateUrl: './ruta-crear-rol.component.html',
  styleUrls: ['./ruta-crear-rol.component.css']
})
export class RutaCrearRolComponent implements OnInit {

  nuevoRol: Rol;

  constructor(
    private readonly _rolService: RolService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearRol(formulario: NgForm) {
    this.nuevoRol = formulario.form.value;
    const observableCrearRol = this._rolService.createRol(this.nuevoRol);
    observableCrearRol
      .subscribe(
        () => {
          console.log('Rol registrado: ', this.nuevoRol);
          const ruta = ['/roles', 'lista-roles'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando rol', error);
        }
      );
  }
}
