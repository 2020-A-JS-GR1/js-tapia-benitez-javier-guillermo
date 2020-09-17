import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const observableRutaUsuario = this._activatedRoute.params;
    observableRutaUsuario
      .subscribe(
        (parametros: Params) => {
          const id = Number(parametros.id);
          const observableObtenerUsuario = this._usuarioService.getUsuario(id);
          observableObtenerUsuario
            .subscribe(
              (usuario: Usuario) => {
                this.usuario = usuario;
              },
              error => {
                console.error('Error obteniendo usuario', error);
              }
            );
        }
      );
  }

}
