import { AdopcionService } from './servicios/http/adopcion.service';
import { DonacionService } from './servicios/http/donacion.service';
import { EspecieService } from './servicios/http/especie.service';
import { FotografiaMascotaService } from './servicios/http/fotografia-mascota.service';
import { FotografiaService } from './servicios/http/fotografia.service';
import { MascotaService } from './servicios/http/mascota.service';
import { ProvinciaService } from './servicios/http/provincia.service';
import { RazaService } from './servicios/http/raza.service';
import { RefugioMascotaService } from './servicios/http/refugio-mascota.service';
import { RefugioService } from './servicios/http/refugio.service';
import { RolUsuarioService } from './servicios/http/rol-usuario.service';
import { RolService } from './servicios/http/rol.service';
import { TarjetaService } from './servicios/http/tarjeta.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './servicios/http/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    RutaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AdopcionService,
    DonacionService,
    EspecieService,
    FotografiaMascotaService,
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
