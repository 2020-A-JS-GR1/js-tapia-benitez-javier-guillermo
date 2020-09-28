import { Categoria } from "./categoria";

export class Arma {
    constructor(
        public nombre: string,
        public rpm: number,
        public capacidad: number,
        public imagen: string,
        public categoria: number | Categoria | any,
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
