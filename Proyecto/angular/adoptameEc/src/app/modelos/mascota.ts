import { Raza } from './raza';

export class Mascota {
    id: number;
    nombre: string;
    edad: string;
    genero: string;
    tamano: string;
    descripcion: string;
    pelaje: string;
    vacuna: string;
    esterilizacion: string;
    id_raza: number | Raza;
}
