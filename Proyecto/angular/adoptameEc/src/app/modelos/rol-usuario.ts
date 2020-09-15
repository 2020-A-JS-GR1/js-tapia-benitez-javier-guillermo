import { Rol } from './rol';
import { Usuario } from './usuario';

export class RolUsuario {
    id: number;
    id_usuario: Usuario;
    id_rol: Rol;
}
