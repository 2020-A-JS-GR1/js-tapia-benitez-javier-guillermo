import { Mascota } from './mascota';
import { Tarjeta } from './tarjeta';

export class Donacion {
    id: number;
    valor: number;
    fecha: string;
    id_tarjeta: Tarjeta;
    id_mascota: Mascota;
}
