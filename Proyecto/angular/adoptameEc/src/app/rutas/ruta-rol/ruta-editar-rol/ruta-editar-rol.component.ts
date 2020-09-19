import { RolService } from './../../../servicios/http/rol.service';
import { Rol } from './../../../modelos/rol';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-editar-rol',
  templateUrl: './ruta-editar-rol.component.html',
  styleUrls: ['./ruta-editar-rol.component.css']
})
export class RutaEditarRolComponent implements OnInit {

  editadoRol: Rol;
  id: number;

  constructor(
    private readonly _rolService: RolService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaRol = this._activatedRoute.params;
    observableRutaRol
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
        }
      );
  }

  actualizarRol(formulario: NgForm) {
    this.editadoRol = formulario.form.value;
    const observableActualizarRol = this._rolService.updateRol(this.id, this.editadoRol);
    observableActualizarRol
      .subscribe(
        () => {
          console.log('Rol actualizado: ', this.editadoRol);
          const ruta = ['/roles', 'lista-roles'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error obteniendo rol', error);
        }
      );
  }
}
