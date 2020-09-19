import { Usuario } from './usuario';

export class Tarjeta {
    constructor(
        public numero: string,
        public fechaCaducidad: string,
        public cvv: string,
        public id_usuario: number | Usuario | any,
        public id?: number
    ) { }
}
