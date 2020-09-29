import { Categoria } from 'src/app/models/categoria';
import { Arma } from './../../../models/arma';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriaService } from 'src/app/services/http/categoria.service';

@Component({
  selector: 'app-formulario-arma',
  templateUrl: './formulario-arma.component.html',
  styleUrls: ['./formulario-arma.component.css']
})
export class FormularioArmaComponent implements OnInit {

  @Input()
  editar: Arma;

  @Output()
  enviarFormularioEvent: EventEmitter<Arma> = new EventEmitter<Arma>();

  locationImages: string = 'assets/images/';
  seleccion: boolean = true;

  nombreFormulario: string;
  rpmFormulario: number;
  capacidadFormulario: number;
  imagenFormulario: string;
  categoriaFormulario: string;

  arregloCategorias: Categoria[] = [];

  constructor(
    private readonly _categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    const observableCategorias = this._categoriaService.get();
    observableCategorias
      .subscribe(
        (categoria: Categoria[]) => {
          this.arregloCategorias = categoria;
          if (this.editar) {
            this.llenarFormulario();
          }
        },
        error => {
          console.error('Error obteniendo categorias', error);
        }
      );
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new Arma(
        formulario.form.value.nombre,
        formulario.form.value.rpm,
        formulario.form.value.capacidad,
        this.locationImages + formulario.form.value.imagen,
        formulario.form.value.categoria
      )
    );
  }

  llenarFormulario() {
    this.nombreFormulario = this.editar.nombre;
    this.rpmFormulario = this.editar.rpm;
    this.capacidadFormulario = this.editar.capacidad;
    const imagen = this.editar.imagen.split('/');
    this.imagenFormulario = imagen[imagen.length - 1];
    this.categoriaFormulario = this.editar.categoria.id;

    this.seleccionarCategoria();
  }

  seleccionarCategoria() {
    if (this.categoriaFormulario !== 'Default') {
      this.seleccion = false;
    } else {
      this.seleccion = true;
    }
  }
}
