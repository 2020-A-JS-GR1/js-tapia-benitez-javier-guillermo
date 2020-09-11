import { UsuarioService } from './../../servicios/http/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuario; 

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const observableRuta = this._activatedRoute.params;
    observableRuta
    .subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        const observableUsuario = this._usuarioService.obtenerUnoPorId(id);
        observableUsuario
        .subscribe(
          (usuario: any) => {
            this.usuario = usuario;
          },
          error => {
            console.error(error);
          }
        );
      }
    );
  }

}
