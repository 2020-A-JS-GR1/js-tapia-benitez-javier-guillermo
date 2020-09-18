import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  nuevoUsuario: Usuario;

  nombreFormulario: string;
  apellidoFormulario: string;
  emailFormulario: string;

  constructor(
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(formulario) {
    console.log(formulario);
  }

}
