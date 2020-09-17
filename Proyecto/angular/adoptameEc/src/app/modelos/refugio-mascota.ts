import { Mascota } from './mascota';
import { Refugio } from 'src/app/modelos/refugio';

export class RefugioMascota {
    id: number;
    id_refugio: number | Refugio;
    id_mascota: number | Mascota;
}
