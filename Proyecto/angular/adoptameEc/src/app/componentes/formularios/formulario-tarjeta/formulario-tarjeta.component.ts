import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarjeta } from 'src/app/modelos/tarjeta';
import { Usuario } from 'src/app/modelos/usuario';
import { TarjetaService } from 'src/app/servicios/http/tarjeta.service';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';

@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css']
})
export class FormularioTarjetaComponent implements OnInit {

  @Input()
  idTarjetaEditar: number;

  @Output()
  enviarFormularioEvent = new EventEmitter<NgForm>();

  arregloUsuarios: Usuario[] = [];
  seleccion: boolean = true;

  numeroFormulario: string;
  diaFormulario: number;
  anioFormulario: number;
  cvvFormulario: string;
  usuarioIdFormulario: number = 0;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _tarjetaService: TarjetaService
  ) { }

  ngOnInit(): void {
    const observableUsuarios = this._usuarioService.getUsuarios();
    observableUsuarios
      .subscribe(
        (usuarios: Usuario[]) => {
          this.arregloUsuarios = usuarios;
        },
        error => {
          console.error('Error obteniendo usuarios', error);
        }
      );

    if (this.idTarjetaEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(formulario);
  }

  llenarFormulario() {
    const observableObtenerTarjeta = this._tarjetaService.getTarjeta(this.idTarjetaEditar);
    observableObtenerTarjeta
      .subscribe(
        (tarjeta: Tarjeta) => {
          this.numeroFormulario = tarjeta.numero;
          this.diaFormulario = Number(tarjeta.fechaCaducidad.substr(0, 2));
          this.anioFormulario = Number(tarjeta.fechaCaducidad.substr(3));
          this.cvvFormulario = tarjeta.cvv;
          this.usuarioIdFormulario = tarjeta.id_usuario.id;
        },
        error => {
          console.error('Error obteniendo tarjeta', error);
        }
      );

    this.seleccionarOpcionUsuario();
  }

  seleccionarOpcionUsuario() {
    if (Number(this.usuarioIdFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}