import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/http/usuario.service';

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true;

  arregloPeliculas = [
    {
      id: 1,
      url: 'https://4.bp.blogspot.com/-AW6fFVemtro/UcIVsXqah1I/AAAAAAAAABY/pikV48uCK3k/s1600/la-huerfana_portada.jpg',
      descripcion: 'Pelicula de terror psicologico',
      nombrePelicula: 'La Huerfana'
    },
    {
      id: 2,
      url: 'https://i.pinimg.com/236x/ca/bc/b2/cabcb2444022fd5364d6a0447de76c0b--sea-of-monsters-logan-lerman.jpg',
      descripcion: 'Pelicula de las aventuras de Percy Jackson en los mares',
      nombrePelicula: 'Percy Jackson'
    },
    {
      id: 3,
      url: 'https://2.bp.blogspot.com/-p9pm_fwtiWw/VdQSbtoeDuI/AAAAAAAAAB4/1FBDpm1WiEA/s1600/13486.jpg',
      descripcion: 'Trata sobre un heroe que puede modifiar su tamaño',
      nombrePelicula: 'Ant-Man'
    },
    {
      id: 4,
      url: 'https://i.pinimg.com/originals/4c/d3/ec/4cd3ec9b3650ca2e7079e55b3b915e35.jpg',
      descripcion: 'Pelicula de Disney del clasico la bella durmiente',
      nombrePelicula: 'Malefica'
    },
  ];

  arregloUsuarios = [];

  arregloObservables = [];

  arregloNumeros = [1, 2, 3];

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data: Object) => { // THEN TRY
          this.arregloUsuarios = data as any[];
          console.log(data);
        },
        (error) => { // CATCH
          console.log(error);
        }
      );
    this.arregloObservables.push(suscripcion);
  }

  crearUsuario() {
    const usuarioNuevo = {
      cedula: '1754896322',
      nombre: 'Sua',
      correo: 's@a.com'
    };
    const obsCrearUsuario = this._usuarioService.crear(usuarioNuevo);
    obsCrearUsuario
      .subscribe(
        (datos) => {
          console.log('Nuevo Usuario', datos);
          this.mensajeConsola(true);
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }
}
