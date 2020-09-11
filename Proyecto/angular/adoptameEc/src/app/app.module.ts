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

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TopMenuComponent,
    PiePaginaComponent
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
