import { Mascota } from './mascota';
import { Tarjeta } from './tarjeta';

export class Donacion {
    constructor(
        public valor: number,
        public fecha: number,
        public id_tarjeta: number | Tarjeta | any,
        public id_mascota: number | Mascota | any,
        public id?: number
    ) { }
}
