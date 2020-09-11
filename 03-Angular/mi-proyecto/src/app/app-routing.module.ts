import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';

const routes: Routes = [
  {
    component: RutaInicioComponent, // COMPONENTE
    path: 'inicio' // URL
  },
  {
    component: RutaLoginComponent,
    path: 'login'
  },
  {
    component: RutaUsuarioComponent,
    path: 'usuario',
    children: [
      {
        path: 'lista',
        component: RutaListaUsuarioComponent
      },
      {
        path: 'crear',
        component: RutaCrearUsuarioComponent
      },
      {
        path: 'editar/:id',
        component: RutaEditarUsuarioComponent
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
