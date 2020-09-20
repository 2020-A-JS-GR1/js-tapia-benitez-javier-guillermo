import { Especie } from './especie';

export class Raza {
    constructor(
        public nombre: string,
        public descripcion: string,
        public id_especie: number | Especie | any,
        public id?: number
    ) { }
}
