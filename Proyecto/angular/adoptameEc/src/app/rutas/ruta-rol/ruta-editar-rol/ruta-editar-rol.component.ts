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
  mostrarFormulario: boolean = false;

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
          const observableObtenerRol = this._rolService.getRol(this.id);
          observableObtenerRol
            .subscribe(
              (rol: Rol) => {
                this.editadoRol = rol;
                this.llenarFormularioRol();
              },
              error => {
                console.error('Error obteniendo rol', error);
              }
            );
        }
      );
  }

  llenarFormularioRol() {
    this.mostrarFormulario = true;
  }

  actualizarRol(rol: Rol) {
    const observableActualizarRol = this._rolService.updateRol(this.id, rol);
    observableActualizarRol
      .subscribe(
        () => {
          console.log('Rol actualizado: ', rol);
          const ruta = ['/roles', 'lista-roles'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando rol', error);
        }
      );
  }
}
