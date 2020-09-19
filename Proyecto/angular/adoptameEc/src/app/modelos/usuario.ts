import { Provincia } from './provincia';

export class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public contrasena: string,
        public perros: number,
        public gatos: number,
        public ninos: number,
        public id_provincia?: Provincia | number | any,
        public id?: number
    ) { }
}
