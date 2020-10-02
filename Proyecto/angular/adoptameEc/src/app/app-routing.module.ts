import { RutaContactoComponent } from './rutas/ruta-contacto/ruta-contacto.component';
import { RutaDonarComponent } from './rutas/ruta-donar/ruta-donar.component';
import { RutaAdoptarComponent } from './rutas/ruta-adoptar/ruta-adoptar.component';
import { RutaNosotrosComponent } from './rutas/ruta-nosotros/ruta-nosotros.component';
import { RutaEditarRefugioMascotaComponent } from './rutas/ruta-refugio-mascota/ruta-editar-refugio-mascota/ruta-editar-refugio-mascota.component';
import { RutaCrearRefugioMascotaComponent } from './rutas/ruta-refugio-mascota/ruta-crear-refugio-mascota/ruta-crear-refugio-mascota.component';
import { RutaEditarFotografiaComponent } from './rutas/ruta-fotografia/ruta-editar-fotografia/ruta-editar-fotografia.component';
import { RutaCrearFotografiaComponent } from './rutas/ruta-fotografia/ruta-crear-fotografia/ruta-crear-fotografia.component';
import { RutaEditarMascotaComponent } from './rutas/ruta-mascota/ruta-editar-mascota/ruta-editar-mascota.component';
import { RutaCrearMascotaComponent } from './rutas/ruta-mascota/ruta-crear-mascota/ruta-crear-mascota.component';
import { RutaEditarRazaComponent } from './rutas/ruta-raza/ruta-editar-raza/ruta-editar-raza.component';
import { RutaCrearRazaComponent } from './rutas/ruta-raza/ruta-crear-raza/ruta-crear-raza.component';
import { RutaEditarEspecieComponent } from './rutas/ruta-especie/ruta-editar-especie/ruta-editar-especie.component';
import { RutaCrearEspecieComponent } from './rutas/ruta-especie/ruta-crear-especie/ruta-crear-especie.component';
import { RutaEditarRefugioComponent } from './rutas/ruta-refugio/ruta-editar-refugio/ruta-editar-refugio.component';
import { RutaCrearRefugioComponent } from './rutas/ruta-refugio/ruta-crear-refugio/ruta-crear-refugio.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaEditarTarjetaComponent } from './rutas/ruta-tarjeta/ruta-editar-tarjeta/ruta-editar-tarjeta.component';
import { RutaCrearTarjetaComponent } from './rutas/ruta-tarjeta/ruta-crear-tarjeta/ruta-crear-tarjeta.component';
import { RutaEditarRolUsuarioComponent } from './rutas/ruta-rol-usuario/ruta-editar-rol-usuario/ruta-editar-rol-usuario.component';
import { RutaCrearRolUsuarioComponent } from './rutas/ruta-rol-usuario/ruta-crear-rol-usuario/ruta-crear-rol-usuario.component';
import { RutaEditarRolComponent } from './rutas/ruta-rol/ruta-editar-rol/ruta-editar-rol.component';
import { RutaCrearRolComponent } from './rutas/ruta-rol/ruta-crear-rol/ruta-crear-rol.component';
import { RutaEditarProvinciaComponent } from './rutas/ruta-provincia/ruta-editar-provincia/ruta-editar-provincia.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-usuario/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-usuario/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaListaRolesComponent } from './rutas/ruta-rol/ruta-lista-roles/ruta-lista-roles.component';
import { RutaListaProvinciasComponent } from './rutas/ruta-provincia/ruta-lista-provincias/ruta-lista-provincias.component';
import { RutaListaRefugiosComponent } from './rutas/ruta-refugio/ruta-lista-refugios/ruta-lista-refugios.component';
import { RutaListaPeticionesPendientesComponent } from './rutas/ruta-adopcion/ruta-lista-peticiones-pendientes/ruta-lista-peticiones-pendientes.component';
import { RutaListaPeticionesComponent } from './rutas/ruta-adopcion/ruta-lista-peticiones/ruta-lista-peticiones.component';
import { RutaListaRazasComponent } from './rutas/ruta-raza/ruta-lista-razas/ruta-lista-razas.component';
import { RutaListaEspeciesComponent } from './rutas/ruta-especie/ruta-lista-especies/ruta-lista-especies.component';
import { RutaListaFotografiasComponent } from './rutas/ruta-fotografia/ruta-lista-fotografias/ruta-lista-fotografias.component';
import { RutaListaRefugiosMascotasComponent } from './rutas/ruta-refugio-mascota/ruta-lista-refugios-mascotas/ruta-lista-refugios-mascotas.component';
import { RutaListaMascotasComponent } from './rutas/ruta-mascota/ruta-lista-mascotas/ruta-lista-mascotas.component';
import { RutaListaTarjetasComponent } from './rutas/ruta-tarjeta/ruta-lista-tarjetas/ruta-lista-tarjetas.component';
import { RutaListaDonacionesComponent } from './rutas/ruta-donacion/ruta-lista-donaciones/ruta-lista-donaciones.component';
import { RutaListaRolesUsuariosComponent } from './rutas/ruta-rol-usuario/ruta-lista-roles-usuarios/ruta-lista-roles-usuarios.component';
import { RutaListaUsuariosComponent } from './rutas/ruta-usuario/ruta-lista-usuarios/ruta-lista-usuarios.component';
import { RutaRolesComponent } from './rutas/ruta-roles/ruta-roles.component';
import { RutaRefugiosComponent } from './rutas/ruta-refugios/ruta-refugios.component';
import { RutaPeticionesComponent } from './rutas/ruta-peticiones/ruta-peticiones.component';
import { RutaMascotasComponent } from './rutas/ruta-mascotas/ruta-mascotas.component';
import { RutaUsuariosComponent } from './rutas/ruta-usuarios/ruta-usuarios.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import { RutaEstadisticasComponent } from './rutas/ruta-estadisticas/ruta-estadisticas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaCrearProvinciaComponent } from './rutas/ruta-provincia/ruta-crear-provincia/ruta-crear-provincia.component';

const routes: Routes = [
  {
    component: RutaEstadisticasComponent,
    path: 'estadisticas'
  },
  {
    component: RutaRegistroComponent,
    path: 'registro'
  },
  {
    component: RutaLoginComponent,
    path: 'login'
  },
  {
    component: RutaUsuariosComponent,
    path: 'usuarios',
    children: [
      {
        component: RutaListaUsuariosComponent,
        path: 'lista-usuarios'
      },
      {
        component: RutaCrearUsuarioComponent,
        path: 'crear-usuario'
      },
      {
        component: RutaEditarUsuarioComponent,
        path: 'editar-usuario/:id'
      },
      {
        component: RutaListaRolesUsuariosComponent,
        path: 'lista-roles-usuarios'
      },
      {
        component: RutaCrearRolUsuarioComponent,
        path: 'crear-rol-usuario'
      },
      {
        component: RutaEditarRolUsuarioComponent,
        path: 'editar-rol-usuario/:id'
      },
      {
        component: RutaListaDonacionesComponent,
        path: 'lista-donaciones'
      },
      {
        component: RutaListaTarjetasComponent,
        path: 'lista-tarjetas'
      },
      {
        component: RutaCrearTarjetaComponent,
        path: 'crear-tarjeta'
      },
      {
        component: RutaEditarTarjetaComponent,
        path: 'editar-tarjeta/:id'
      },
      {
        path: '',
        redirectTo: 'lista-usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaMascotasComponent,
    path: 'mascotas',
    children: [
      {
        component: RutaListaMascotasComponent,
        path: 'lista-mascotas'
      },
      {
        component: RutaCrearMascotaComponent,
        path: 'crear-mascota'
      },
      {
        component: RutaEditarMascotaComponent,
        path: 'editar-mascota/:id'
      },
      {
        component: RutaListaRefugiosMascotasComponent,
        path: 'lista-refugios-mascotas'
      },
      {
        component: RutaCrearRefugioMascotaComponent,
        path: 'crear-refugio-mascota'
      },
      {
        component: RutaEditarRefugioMascotaComponent,
        path: 'editar-refugio-mascota/:id'
      },
      {
        component: RutaListaFotografiasComponent,
        path: 'lista-fotografias'
      },
      {
        component: RutaCrearFotografiaComponent,
        path: 'crear-fotografia'
      },
      {
        component: RutaEditarFotografiaComponent,
        path: 'editar-fotografia/:id'
      },
      {
        component: RutaListaEspeciesComponent,
        path: 'lista-especies'
      },
      {
        component: RutaCrearEspecieComponent,
        path: 'crear-especie'
      },
      {
        component: RutaEditarEspecieComponent,
        path: 'editar-especie/:id'
      },
      {
        component: RutaListaRazasComponent,
        path: 'lista-razas'
      },
      {
        component: RutaCrearRazaComponent,
        path: 'crear-raza'
      },
      {
        component: RutaEditarRazaComponent,
        path: 'editar-raza/:id'
      },
      {
        path: '',
        redirectTo: 'lista-mascotas',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaPeticionesComponent,
    path: 'peticiones',
    children: [
      {
        component: RutaListaPeticionesComponent,
        path: 'lista-peticiones'
      },
      {
        component: RutaListaPeticionesPendientesComponent,
        path: 'lista-peticiones-pendientes'
      },
      {
        path: '',
        redirectTo: 'lista-peticiones',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaRefugiosComponent,
    path: 'refugios',
    children: [
      {
        component: RutaListaRefugiosComponent,
        path: 'lista-refugios'
      },
      {
        component: RutaCrearRefugioComponent,
        path: 'crear-refugio'
      },
      {
        component: RutaEditarRefugioComponent,
        path: 'editar-refugio/:id'
      },
      {
        component: RutaListaProvinciasComponent,
        path: 'lista-provincias'
      },
      {
        component: RutaCrearProvinciaComponent,
        path: 'crear-provincia'
      },
      {
        component: RutaEditarProvinciaComponent,
        path: 'editar-provincia/:id'
      },
      {
        path: '',
        redirectTo: 'lista-refugios',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaRolesComponent,
    path: 'roles',
    children: [
      {
        component: RutaListaRolesComponent,
        path: 'lista-roles'
      },
      {
        component: RutaCrearRolComponent,
        path: 'crear-rol'
      },
      {
        component: RutaEditarRolComponent,
        path: 'editar-rol/:id'
      },
      {
        path: '',
        redirectTo: 'lista-roles',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaInicioComponent,
    path:  'inicio'
  },
  {
    component: RutaNosotrosComponent,
    path: 'nosotros'
  },
  {
    component: RutaAdoptarComponent,
    path: 'adoptar'
  },
  {
    component: RutaDonarComponent,
    path: 'donar'
  },
  {
    component: RutaContactoComponent,
    path: 'contacto'
  },
  {
    path: '',
    redirectTo: '/adoptar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
