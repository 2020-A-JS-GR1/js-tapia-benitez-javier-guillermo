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

// FUNCIONES COMO PARAMETROS

// FIND
// devolver una expresion -> TRUTY FALSY
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Pedro';
        }
    );
console.log('respuestaFind', respuestaFind);

// FINDINDEX
// devolver una expresion -> TRUTY FALSY
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Pedro';
        }
    );
console.log('respuestaIndex', respuestaIndex);

// FOREACH
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Pedro';
        }
    );
console.log('respuestaForEach', respuestaForEach); // undefined

// MAP
// devolver NUEVO ELEMENTO
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            return {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
        }
    );
console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);

const respuestaMapNuevo = arreglo
    .map(
        // Funcion Anonima -> NO TIENE NOMBRE
        // Funcion de flecha GORDA
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

// FILTER
// devolver EXPRESION TRUTY FALSY
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);