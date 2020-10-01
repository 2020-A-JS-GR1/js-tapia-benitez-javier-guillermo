import { RolUsuarioService } from './../../servicios/http/rol-usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';
import { RolUsuario } from 'src/app/modelos/rol-usuario';

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.css']
})
export class RutaRegistroComponent implements OnInit {

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario: Usuario) {
    const observableCrearUsuario = this._usuarioService.createUsuario(usuario);
    observableCrearUsuario
      .subscribe(
        (usuarioNew: Usuario) => {
          console.log('Usuario registrado: ', usuarioNew);
          const observableAsignarRol = this._rolUsuarioService.createRolUsuario(
            new RolUsuario(
              usuarioNew.id,
              4
            )
          );
          observableAsignarRol
            .subscribe(
              () => {
                console.log('Nuevo cliente registrado');
                const ruta = ['/inicio'];
                this._router.navigate(ruta);
              },
              error => {
                console.error('Error registrando rol de usuario', error);
              }
            );
        },
        error => {
          console.error('Error registrando usuario', error);
        }
      );
  }
}
