import { SesionService } from './servicios/sesion.service';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { TopMenuComponent } from './componentes/top-menu/top-menu.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';

import { RutaEstadisticasComponent } from './rutas/ruta-estadisticas/ruta-estadisticas.component';
import { RutaUsuariosComponent } from './rutas/ruta-usuarios/ruta-usuarios.component';
import { RutaMascotasComponent } from './rutas/ruta-mascotas/ruta-mascotas.component';
import { RutaPeticionesComponent } from './rutas/ruta-peticiones/ruta-peticiones.component';
import { RutaRefugiosComponent } from './rutas/ruta-refugios/ruta-refugios.component';
import { RutaRolesComponent } from './rutas/ruta-roles/ruta-roles.component';
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

import { RutaCrearUsuarioComponent } from './rutas/ruta-usuario/ruta-crear-usuario/ruta-crear-usuario.component';

import { RutaEditarUsuarioComponent } from './rutas/ruta-usuario/ruta-editar-usuario/ruta-editar-usuario.component';

import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';

import { RutaListaFotografiasComponent } from './rutas/ruta-fotografia/ruta-lista-fotografias/ruta-lista-fotografias.component';
import { RutaListaDonacionesComponent } from './rutas/ruta-donacion/ruta-lista-donaciones/ruta-lista-donaciones.component';
import { RutaListaEspeciesComponent } from './rutas/ruta-especie/ruta-lista-especies/ruta-lista-especies.component';
import { RutaListaMascotasComponent } from './rutas/ruta-mascota/ruta-lista-mascotas/ruta-lista-mascotas.component';
import { RutaListaPeticionesPendientesComponent } from './rutas/ruta-adopcion/ruta-lista-peticiones-pendientes/ruta-lista-peticiones-pendientes.component';
import { RutaListaPeticionesComponent } from './rutas/ruta-adopcion/ruta-lista-peticiones/ruta-lista-peticiones.component';
import { RutaListaProvinciasComponent } from './rutas/ruta-provincia/ruta-lista-provincias/ruta-lista-provincias.component';
import { RutaListaRazasComponent } from './rutas/ruta-raza/ruta-lista-razas/ruta-lista-razas.component';
import { RutaListaRefugiosComponent } from './rutas/ruta-refugio/ruta-lista-refugios/ruta-lista-refugios.component';
import { RutaListaRefugiosMascotasComponent } from './rutas/ruta-refugio-mascota/ruta-lista-refugios-mascotas/ruta-lista-refugios-mascotas.component';
import { RutaListaRolesUsuariosComponent } from './rutas/ruta-rol-usuario/ruta-lista-roles-usuarios/ruta-lista-roles-usuarios.component';
import { RutaListaRolesComponent } from './rutas/ruta-rol/ruta-lista-roles/ruta-lista-roles.component';
import { RutaListaUsuariosComponent } from './rutas/ruta-usuario/ruta-lista-usuarios/ruta-lista-usuarios.component';
import { RutaListaTarjetasComponent } from './rutas/ruta-tarjeta/ruta-lista-tarjetas/ruta-lista-tarjetas.component';

import { AdopcionService } from './servicios/http/adopcion.service';
import { DonacionService } from './servicios/http/donacion.service';
import { EspecieService } from './servicios/http/especie.service';
import { FotografiaService } from './servicios/http/fotografia.service';
import { MascotaService } from './servicios/http/mascota.service';
import { ProvinciaService } from './servicios/http/provincia.service';
import { RazaService } from './servicios/http/raza.service';
import { RefugioMascotaService } from './servicios/http/refugio-mascota.service';
import { RefugioService } from './servicios/http/refugio.service';
import { RolUsuarioService } from './servicios/http/rol-usuario.service';
import { RolService } from './servicios/http/rol.service';
import { TarjetaService } from './servicios/http/tarjeta.service';
import { UsuarioService } from './servicios/http/usuario.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RutaCrearProvinciaComponent } from './rutas/ruta-provincia/ruta-crear-provincia/ruta-crear-provincia.component';
import { RutaEditarProvinciaComponent } from './rutas/ruta-provincia/ruta-editar-provincia/ruta-editar-provincia.component';
import { FormularioProvinciaComponent } from './componentes/formularios/formulario-provincia/formulario-provincia.component';
import { RutaCrearRolComponent } from './rutas/ruta-rol/ruta-crear-rol/ruta-crear-rol.component';
import { RutaEditarRolComponent } from './rutas/ruta-rol/ruta-editar-rol/ruta-editar-rol.component';
import { FormularioRolComponent } from './componentes/formularios/formulario-rol/formulario-rol.component';
import { RutaCrearRolUsuarioComponent } from './rutas/ruta-rol-usuario/ruta-crear-rol-usuario/ruta-crear-rol-usuario.component';
import { RutaEditarRolUsuarioComponent } from './rutas/ruta-rol-usuario/ruta-editar-rol-usuario/ruta-editar-rol-usuario.component';
import { FormularioRolUsuarioComponent } from './componentes/formularios/formulario-rol-usuario/formulario-rol-usuario.component';
import { RutaCrearTarjetaComponent } from './rutas/ruta-tarjeta/ruta-crear-tarjeta/ruta-crear-tarjeta.component';
import { RutaEditarTarjetaComponent } from './rutas/ruta-tarjeta/ruta-editar-tarjeta/ruta-editar-tarjeta.component';
import { FormularioTarjetaComponent } from './componentes/formularios/formulario-tarjeta/formulario-tarjeta.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { FormularioRefugioComponent } from './componentes/formularios/formulario-refugio/formulario-refugio.component';
import { RutaCrearRefugioComponent } from './rutas/ruta-refugio/ruta-crear-refugio/ruta-crear-refugio.component';
import { RutaEditarRefugioComponent } from './rutas/ruta-refugio/ruta-editar-refugio/ruta-editar-refugio.component';
import { FormularioEspecieComponent } from './componentes/formularios/formulario-especie/formulario-especie.component';
import { RutaCrearEspecieComponent } from './rutas/ruta-especie/ruta-crear-especie/ruta-crear-especie.component';
import { RutaEditarEspecieComponent } from './rutas/ruta-especie/ruta-editar-especie/ruta-editar-especie.component';
import { FormularioRazaComponent } from './componentes/formularios/formulario-raza/formulario-raza.component';
import { RutaCrearRazaComponent } from './rutas/ruta-raza/ruta-crear-raza/ruta-crear-raza.component';
import { RutaEditarRazaComponent } from './rutas/ruta-raza/ruta-editar-raza/ruta-editar-raza.component';
import { FormularioMascotaComponent } from './componentes/formularios/formulario-mascota/formulario-mascota.component';
import { RutaCrearMascotaComponent } from './rutas/ruta-mascota/ruta-crear-mascota/ruta-crear-mascota.component';
import { RutaEditarMascotaComponent } from './rutas/ruta-mascota/ruta-editar-mascota/ruta-editar-mascota.component';
import { FormularioFotografiaComponent } from './componentes/formularios/formulario-fotografia/formulario-fotografia.component';
import { RutaCrearFotografiaComponent } from './rutas/ruta-fotografia/ruta-crear-fotografia/ruta-crear-fotografia.component';
import { RutaEditarFotografiaComponent } from './rutas/ruta-fotografia/ruta-editar-fotografia/ruta-editar-fotografia.component';
import { FormularioRefugioMascotaComponent } from './componentes/formularios/formulario-refugio-mascota/formulario-refugio-mascota.component';
import { RutaCrearRefugioMascotaComponent } from './rutas/ruta-refugio-mascota/ruta-crear-refugio-mascota/ruta-crear-refugio-mascota.component';
import { RutaEditarRefugioMascotaComponent } from './rutas/ruta-refugio-mascota/ruta-editar-refugio-mascota/ruta-editar-refugio-mascota.component';
import { FormularioLoginComponent } from './componentes/formularios/formulario-login/formulario-login.component';
import { RutaNosotrosComponent } from './rutas/ruta-nosotros/ruta-nosotros.component';
import { RutaAdoptarComponent } from './rutas/ruta-adoptar/ruta-adoptar.component';
import { RutaDonarComponent } from './rutas/ruta-donar/ruta-donar.component';
import { RutaContactoComponent } from './rutas/ruta-contacto/ruta-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TopMenuComponent,
    PiePaginaComponent,
    RutaEstadisticasComponent,
    RutaUsuariosComponent,
    RutaMascotasComponent,
    RutaPeticionesComponent,
    RutaRefugiosComponent,
    RutaRolesComponent,
    RutaRegistroComponent,
    RutaLoginComponent,
    RutaListaUsuariosComponent,
    RutaListaRolesUsuariosComponent,
    RutaListaDonacionesComponent,
    RutaListaTarjetasComponent,
    RutaListaMascotasComponent,
    RutaListaRefugiosMascotasComponent,
    RutaListaFotografiasComponent,
    RutaListaEspeciesComponent,
    RutaListaRazasComponent,
    RutaListaPeticionesComponent,
    RutaListaPeticionesPendientesComponent,
    RutaListaRefugiosComponent,
    RutaListaProvinciasComponent,
    RutaListaRolesComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormularioUsuarioComponent,
    RutaCrearProvinciaComponent,
    RutaEditarProvinciaComponent,
    FormularioProvinciaComponent,
    RutaCrearRolComponent,
    RutaEditarRolComponent,
    FormularioRolComponent,
    RutaCrearRolUsuarioComponent,
    RutaEditarRolUsuarioComponent,
    FormularioRolUsuarioComponent,
    RutaCrearTarjetaComponent,
    RutaEditarTarjetaComponent,
    FormularioTarjetaComponent,
    RutaInicioComponent,
    FormularioRefugioComponent,
    RutaCrearRefugioComponent,
    RutaEditarRefugioComponent,
    FormularioEspecieComponent,
    RutaCrearEspecieComponent,
    RutaEditarEspecieComponent,
    FormularioRazaComponent,
    RutaCrearRazaComponent,
    RutaEditarRazaComponent,
    FormularioMascotaComponent,
    RutaCrearMascotaComponent,
    RutaEditarMascotaComponent,
    FormularioFotografiaComponent,
    RutaCrearFotografiaComponent,
    RutaEditarFotografiaComponent,
    FormularioRefugioMascotaComponent,
    RutaCrearRefugioMascotaComponent,
    RutaEditarRefugioMascotaComponent,
    FormularioLoginComponent,
    RutaNosotrosComponent,
    RutaAdoptarComponent,
    RutaDonarComponent,
    RutaContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [
    AdopcionService,
    DonacionService,
    EspecieService,
    FotografiaService,
    MascotaService,
    ProvinciaService,
    RazaService,
    RefugioMascotaService,
    RefugioService,
    RolUsuarioService,
    RolService,
    TarjetaService,
    UsuarioService,
    SesionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
