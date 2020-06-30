const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par=(');
            }

        }
    );
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa
}

promesaEsPar(2)
    .then( // try
        (numeroPar) => {
            console.log('Contenido then', numeroPar);
            return promesaElevarAlCuadrado(numeroPar)// Promesa!!!!
        }
    )
    .then(
        (numeroParAlCuadrado) => {
            console.log('Numero par al cuadrado: ', numeroParAlCuadrado);
        }
    )
    .catch( // catch
        (error) => {
            console.error('Contenido catch', error);
        }
    )