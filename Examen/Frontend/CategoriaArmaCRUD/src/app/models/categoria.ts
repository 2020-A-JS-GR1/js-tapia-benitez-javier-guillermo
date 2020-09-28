export class Categoria {
    constructor(
        public nombre: string,
        public descripcion: string,
        public tipo: 'Primaria' | 'Secundaria',
        public createdAt?: number,
        public updatedAt?: number,
        public id?: number,
    ) { }
}
