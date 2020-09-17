import { Provincia } from './provincia';
export class Refugio {
    id: number;
    nombre: string;
    direccion: string;
    id_provincia: number | Provincia;
}
