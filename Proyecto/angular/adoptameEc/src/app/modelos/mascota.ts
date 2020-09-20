import { Raza } from './raza';

export class Mascota {
    constructor(
        public nombre: string,
        public edad: string,
        public genero: string,
        public tamano: string,
        public descripcion: string,
        public pelaje: string,
        public vacuna: string,
        public esterilizacion: string,
        public id_raza: number | Raza | any,
        public id?: number
    ) { }
}
