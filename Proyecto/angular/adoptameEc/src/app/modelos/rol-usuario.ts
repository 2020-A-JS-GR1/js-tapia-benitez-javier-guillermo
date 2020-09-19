import { Rol } from './rol';
import { Usuario } from './usuario';

export class RolUsuario {
    constructor(
        public id_usuario: number | Usuario | any,
        public id_rol: number | Rol | any,
        public id?: number
    ) { }
}
