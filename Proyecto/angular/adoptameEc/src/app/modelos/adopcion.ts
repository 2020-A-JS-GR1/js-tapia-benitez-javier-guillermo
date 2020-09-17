import { Mascota } from './mascota';
import { Usuario } from './usuario';

export class Adopcion {
    id: number;
    estado: string;
    calificacion: number;
    fecha: string;
    id_usuario: number | Usuario;
    id_mascota: number | Mascota;
}
