import { Mascota } from './mascota';
import { Usuario } from './usuario';

export class Adopcion {
    constructor(
        public estado: string,
        public calificacion: number,
        public fecha: number,
        public id_usuario: number | Usuario | any,
        public id_mascota: number | Mascota | any,
        public id?: number
    ) { }
}
