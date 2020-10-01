import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Provincia } from 'src/app/modelos/provincia';
import { Refugio } from 'src/app/modelos/refugio';
import { ProvinciaService } from 'src/app/servicios/http/provincia.service';

@Component({
  selector: 'app-formulario-refugio',
  templateUrl: './formulario-refugio.component.html',
  styleUrls: ['./formulario-refugio.component.css']
})
export class FormularioRefugioComponent implements OnInit {

  @Input()
  refugioEditar: Refugio;

  @Output()
  enviarFormularioEvent: EventEmitter<Refugio> = new EventEmitter<Refugio>();

  arregloProvincias: Provincia[] = [];

  seleccion: boolean = true;

  nombreFormulario: string;
  direccionFormulario: string;
  provinciaIdFormulario: number = 0;

  constructor(
    private readonly _provinciaService: ProvinciaService,
  ) { }

  ngOnInit(): void {
    const observableProvincias = this._provinciaService.getProvincias();
    observableProvincias
      .subscribe(
        (provincias: Provincia[]) => {
          this.arregloProvincias = provincias;
        },
        error => {
          console.error('Error obteniendo provincias', error);
        }
      );

    if (this.refugioEditar) {
      this.llenarFormulario();
    }
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Refugio(
        formulario.form.value.nombre,
        formulario.form.value.direccion,
        formulario.form.value.id_provincia
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.refugioEditar.nombre;
    this.direccionFormulario = this.refugioEditar.direccion;
    this.provinciaIdFormulario = this.refugioEditar.id_provincia.id;

    this.seleccionarOpcionProvincia();
  }

  seleccionarOpcionProvincia() {
    if (Number(this.provinciaIdFormulario) != 0) {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}
