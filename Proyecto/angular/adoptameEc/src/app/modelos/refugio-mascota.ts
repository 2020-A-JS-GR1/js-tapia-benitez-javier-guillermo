import { Mascota } from './mascota';
import { Refugio } from 'src/app/modelos/refugio';

export class RefugioMascota {
    constructor(
        public id_refugio: number | Refugio | any,
        public id_mascota: number | Mascota | any,
        public id?: number
    ) { }
}
