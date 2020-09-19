import { Rol } from './../../../modelos/rol';
import { RolService } from './../../../servicios/http/rol.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-rol',
  templateUrl: './formulario-rol.component.html',
  styleUrls: ['./formulario-rol.component.css']
})
export class FormularioRolComponent implements OnInit {

  @Input()
  idRolEditar: number;

  @Output()
  enviarFormularioEvent = new EventEmitter<NgForm>();

  nombreFormulario: string;

  constructor(
    private readonly _rolService: RolService
  ) { }

  ngOnInit(): void {
    if (this.idRolEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(formulario);
  }

  llenarFormulario() {
    const observableObtenerRol = this._rolService.getRol(this.idRolEditar);
    observableObtenerRol
      .subscribe(
        (rol: Rol) => {
          this.nombreFormulario = rol.nombre;
        },
        error => {
          console.error('Error obteniendo rol', error);
        }
      );
  }
}
