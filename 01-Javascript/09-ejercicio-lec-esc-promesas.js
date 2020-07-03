const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del arcchivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODOO esto debe ser realizado con promesas.
 */

function promesaLectura(path) {
    const promesaRead = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    );
    return promesaRead;
}

function promesaEscritura(path, contenidoLeido, contenidoNuevo) {
    const contenidoUnido = contenidoLeido + '\n' + contenidoNuevo;
    const promesaWrite = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoUnido,
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
    return promesaWrite;
}

function ejercicio(path, contenidoNuevo) {
    promesaLectura(path)
        .then(
            (contenidoLeido) => {
                console.log('Contenido Leido', contenidoLeido);
                return promesaEscritura(path, contenidoLeido, contenidoNuevo);
            }
        )
        .then(
            () => promesaLectura(path)
        )
        .then(
            (contenidoNuevoLeido) => {
                console.log('Contenido nuevo leido: ', contenidoNuevoLeido);
            }
        )
        .catch(
            (error) => {
                console.error('Error en procesamiento: ', error);
            }
        );
}

ejercicio('./06-ejemplo.txt', 'Hola a todos');