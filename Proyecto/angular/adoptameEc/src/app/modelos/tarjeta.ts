import { Usuario } from './usuario';

export class Tarjeta {
    id: number;
    numero: string;
    fechaCaducidad: string;
    cvv: string;
    id_usuario: Usuario;
}
