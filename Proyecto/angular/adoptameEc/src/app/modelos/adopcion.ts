import { Mascota } from './mascota';
import { Usuario } from './usuario';

export class Adopcion {
    id: number;
    estado: string;
    calificacion: number;
    fecha: string;
    id_usuario: Usuario;
    id_mascota: Mascota;
}
