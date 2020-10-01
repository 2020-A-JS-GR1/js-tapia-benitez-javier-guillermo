import { NgForm } from '@angular/forms';
import { UsuarioService } from './../../../servicios/http/usuario.service';
import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  editadoUsuario: Usuario;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaUsuario = this._activatedRoute.params;
    observableRutaUsuario
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerUsuario = this._usuarioService.getUsuario(this.id);
          observableObtenerUsuario
            .subscribe(
              (usuario: Usuario) => {
                this.editadoUsuario = usuario;
                this.llenarFormularioUsuario();
              },
              error => {
                console.error('Error obteniendo usuario', error);
              }
            );
        }
      );
  }

  llenarFormularioUsuario() {
    this.mostrarFormulario = true;
  }

  actualizarUsuario(usuario: Usuario) {
    const observableActualizarUsuario = this._usuarioService.updateUsuario(this.id, usuario);
    observableActualizarUsuario
      .subscribe(
        () => {
          console.log('Usuario actualizado:', usuario);
          const ruta = ['/usuarios', 'lista-usuarios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando usuario', error);
        }
      );
  }
}
