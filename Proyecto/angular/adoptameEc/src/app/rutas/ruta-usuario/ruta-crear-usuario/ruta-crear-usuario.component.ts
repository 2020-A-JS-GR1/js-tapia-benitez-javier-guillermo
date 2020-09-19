import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  nuevoUsuario: Usuario;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(formulario: NgForm) {
    this.nuevoUsuario = formulario.form.value;
    this.nuevoUsuario.id_provincia = Number(this.nuevoUsuario.id_provincia);
    const observableCrearUsuario = this._usuarioService.createUsuario(this.nuevoUsuario);
    observableCrearUsuario
      .subscribe(
        () => {
          console.log('Usuario registrado: ', this.nuevoUsuario);
          const ruta = ['/usuarios', 'lista-usuarios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error registrando usuario', error);
        }
      );
  }
}
