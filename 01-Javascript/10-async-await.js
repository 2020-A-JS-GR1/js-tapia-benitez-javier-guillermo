const promesaLeerArchivo = () => {
    return new Promise(
        (resolve, reject) => {
            resolve('CONTENIDO LEER ARCHIVO');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise(
        (resolve, reject) => {
            // resolve('CONTENIDO ESCRIBIR ARCHIVO');
            reject('ERROR =(');
        }
    );
}

// ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio() {
    console.log('1');
    try {
        console.log('2');
        const respuestaArchivoActual = await promesaLeerArchivo();
        console.log(respuestaArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.error(error);
    }
    console.log('6');
}

const respuestaEjercicio = ejercicio();
// console.log('respuestaEjercicio', respuestaEjercicio);
// console.log('promesaLeerArchivo', promesaLeerArchivo());
// console.log('promesaEscribirArchivo', promesaEscribirArchivo());

/*
const f = async () => {
    // contenido
}
 */