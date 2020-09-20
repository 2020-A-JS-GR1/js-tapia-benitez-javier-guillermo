import { Provincia } from './provincia';

export class Refugio {
    constructor(
        public nombre: string,
        public direccion: string,
        public id_provincia: number | Provincia | any,
        public id?: number
    ) { }
}
