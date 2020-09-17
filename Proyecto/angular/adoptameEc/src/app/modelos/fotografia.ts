import { Mascota } from './mascota';

export class Fotografia {
    id: number;
    url: string;
    id_mascota: number | Mascota;
}
