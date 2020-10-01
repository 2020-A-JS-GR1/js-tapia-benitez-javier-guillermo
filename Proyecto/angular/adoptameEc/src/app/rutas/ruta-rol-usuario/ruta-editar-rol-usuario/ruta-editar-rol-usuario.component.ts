import { RolUsuarioService } from 'src/app/servicios/http/rol-usuario.service';
import { RolUsuario } from 'src/app/modelos/rol-usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ruta-editar-rol-usuario',
  templateUrl: './ruta-editar-rol-usuario.component.html',
  styleUrls: ['./ruta-editar-rol-usuario.component.css']
})
export class RutaEditarRolUsuarioComponent implements OnInit {

  editadoRolUsuario: RolUsuario;

  id: number;
  mostrarFormulario: boolean = false;

  constructor(
    private readonly _rolUsuarioService: RolUsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableRutaRolUsuario = this._activatedRoute.params;
    observableRutaRolUsuario
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros.id);
          const observableObtenerRolUsuario = this._rolUsuarioService.getRolUsuario(this.id);
          observableObtenerRolUsuario
            .subscribe(
              (rolUsuario: RolUsuario) => {
                this.editadoRolUsuario = rolUsuario;
                this.llenarFormularioRolUsuario();
              },
              error => {
                console.error('Error obteniendo rol de usuario', error);
              }
            );
        }
      );
  }

  llenarFormularioRolUsuario() {
    this.mostrarFormulario = true;
  }

  actualizarRolUsuario(rolUsuario: RolUsuario) {
    const observableActualizarRolUsuario = this._rolUsuarioService.updateRolUsuario(this.id, rolUsuario);
    observableActualizarRolUsuario
      .subscribe(
        () => {
          console.log('Rol de usuario actualizado:', rolUsuario);
          const ruta = ['/usuarios', 'lista-roles-usuarios'];
          this._router.navigate(ruta);
        },
        error => {
          console.error('Error actualizando rol de usuario', error);
        }
      );
  }
}
