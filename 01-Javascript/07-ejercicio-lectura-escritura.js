const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del arcchivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo.
 */

function escribirArchivo(path, contenidoNuevo) {
    const pathAbsoluto = './' + path;
    fs.readFile(
        pathAbsoluto,
        'utf-8',
        (error, contenido) => {
            if (error) {
                console.error('Hubo error', error);
            } else {
                escribirArchivo2(pathAbsoluto, contenidoNuevo, contenido);
            }
        }
    );
}

function escribirArchivo2(path, contenidoNuevo, contenidoLeido) {
    const contenidoUnido = contenidoLeido + '\n' + contenidoNuevo;
    fs.writeFile(
        pathAbsoluto,
        contenidoUnido,
        'utf-8',
        (error) => {
            if (error) {
                console.error('Hubo error', error);
            } else {
                console.log('Archivo modificado con exito');
            }
        }
    );
}

escribirArchivo('06-ejemplo.txt', 'Buenas noches');