import { Provincia } from './provincia';

export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    contrasena: string;
    perros: number;
    gatos: number;
    ninos: number;
    id_provincia: Provincia;
}
