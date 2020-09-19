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
    FormularioProvinciaComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
