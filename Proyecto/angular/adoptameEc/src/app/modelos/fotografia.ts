import { Mascota } from './mascota';

export class Fotografia {
    constructor(
        public url: string,
        public id_mascota: number | Mascota | any,
        public id?: number
    ) { }
}
