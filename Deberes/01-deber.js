const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Javier',
        nota: 13
    },
    {
        id: 3,
        nombre: 'Sebastian',
        nota: 9
    },
    {
        id: 4,
        nombre: 'Nicole',
        nota: 18
    },
    {
        id: 5,
        nombre: 'Pedro',
        nota: 20
    },
    {
        id: 6,
        nombre: 'Vicente',
        nota: 10
    },
    {
        id: 7,
        nombre: 'Dario',
        nota: 17
    },
    {
        id: 8,
        nombre: 'Mateo',
        nota: 11
    },
    {
        id: 9,
        nombre: 'Guillermo',
        nota: 19
    },
    {
        id: 10,
        nombre: 'Hugo',
        nota: 2
    },
];

const respuestaDeber = arreglo
    .map(
        (valorActual) => {
            return {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + (0.1 * (valorActual.nombre.match(/[aeiou]/gi).length)),
            };
        }
    ).map(
        (valorActual) => {
            return {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + (0.05 * (valorActual.nombre.match(/[bcdfghjklmnpqrstvwxys]/gi).length)),
            };
        }
    ).filter(
        (valorActual) => {
            return valorActual.nota >= 14;
        }
    );

console.log('respuestaDeber', respuestaDeber);