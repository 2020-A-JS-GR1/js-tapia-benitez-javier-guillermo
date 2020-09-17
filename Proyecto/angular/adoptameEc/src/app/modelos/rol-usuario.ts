import { Rol } from './rol';
import { Usuario } from './usuario';

export class RolUsuario {
    id: number;
    id_usuario: number | Usuario;
    id_rol: number | Rol;
}
