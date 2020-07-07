const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del arcchivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODOO esto debe ser realizado con async await.
 */

function promesaLeerArchivo(path) {
    return new Promise(
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
}

function promesaEscribirArchivo(path, contenidoLeido, contenidoNuevo) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoLeido + '\n' + contenidoNuevo,
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
}

async function ejercicio(path, contenidoNuevo) {
    try {
        const respuestaArchivoActual = await promesaLeerArchivo(path);
        console.log('Primera lectura: ', respuestaArchivoActual);
        await promesaEscribirArchivo(path, respuestaArchivoActual, contenidoNuevo);
        const nuevoContenido = await promesaLeerArchivo(path);
        console.log('Lectura del texto modificado: ', nuevoContenido);
    } catch (error) {
        console.error('Se produjo un error: ', error);
    }
}

const respuestaDeber = ejercicio('./03-ejemplo.txt', 'Nueva prueba');