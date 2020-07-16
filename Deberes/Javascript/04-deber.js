const inquirer = require('inquirer');
const fs = require('fs');

const path = './04-listaDeArmas.txt';
let validadorSalida = true;

const promesaOpcionCRUD = () => {
    return inquirer
        .prompt({
            type: 'rawlist',
            name: 'option',
            message: 'Bienvenido al sistema de armas. Escoja una opcion:',
            choices: ['Agregar un arma', 'Listar armas', 'Actualizar datos de un arma', 'Borrar un arma', 'Salir'],
        });
}

const promesaIngresarArma = (arma) => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'category',
                message: '¿Cual es la categoria del arma?:',
                choices: ['Rifle de asalto', 'Francotirador', 'Subfusil', 'Ametralladora ligera', 'Escopeta', 'Pistola'],
            },
            {
                type: 'input',
                name: 'gun',
                message: '¿Cual es el nombre del arma?:',
                default: arma,
            }
        ]);
}

const promesaListarArmas = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'category',
            message: 'Categorias de armas:',
            choices: ['Todas', 'Rifle de asalto', 'Francotirador', 'Subfusil', 'Ametralladora ligera', 'Escopeta', 'Pistola'],
        });
}

const promesaSeleccionarArma = (armas) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'updateGun',
            message: 'Seleccione un arma:',
            choices: armas,
        });
}

const promesaLeerArmas = () => {
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

const promesaEscribirArma = (data) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                data,
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

function actualizarArchivo(lista) {
    let listaActualizada = '';
    lista.map(
        (valorActual, indiceActual) => {
            if (indiceActual < lista.length - 1) {
                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
            } else {
                listaActualizada = listaActualizada + JSON.stringify(valorActual);
            }

        }
    );
    return listaActualizada;
}

function filtrarArmas(lista, categoria) {
    if (lista.length === 0) {
        return 'No hay armas registradas';
    } else {
        if (categoria === 'Todas') {
            return (lista);
        } else {
            if (lista
                .some(
                    valorActual => {
                        return valorActual.category === categoria;
                    }
                )) {
                return (lista
                        .filter(
                            (valorActual) => {
                                return valorActual.category === categoria;
                            }
                        )
                );
            } else {
                return 'No se a registrado ' + categoria;
            }
        }
    }
}

async function sistemaArmasCRUD() {
    try {
        while (validadorSalida) {
            const respuestaLeerArmas = await promesaLeerArmas();
            let listaArmas = [];
            if (respuestaLeerArmas !== '') {
                listaArmas = respuestaLeerArmas.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
            }
            const respuestaOpcion = await promesaOpcionCRUD();
            switch (respuestaOpcion.option) {
                case 'Agregar un arma':
                    const respuestaIngresarArma = await promesaIngresarArma();
                    if (respuestaLeerArmas !== '') {
                        await promesaEscribirArma(respuestaLeerArmas + '\n' + JSON.stringify(respuestaIngresarArma));
                    } else {
                        await promesaEscribirArma(JSON.stringify(respuestaIngresarArma));
                    }
                    console.log('------Arma registrada con exito------');
                    break;
                case 'Listar armas':
                    const respuestaListarArmas = await promesaListarArmas();
                    console.table(filtrarArmas(listaArmas, respuestaListarArmas.category));
                    break;
                case 'Actualizar datos de un arma':
                    if (listaArmas.length === 0) {
                        console.log('No hay armas registradas');
                    } else {
                        const respuestaSelecActualizar = await promesaSeleccionarArma(listaArmas.map(
                            valorActual => {
                                return valorActual.gun;
                            }
                        ));
                        listaArmas[listaArmas.findIndex(
                            valorActual => {
                                return valorActual.gun === respuestaSelecActualizar.updateGun;
                            }
                        )] = await promesaIngresarArma(respuestaSelecActualizar.updateGun);
                        await promesaEscribirArma(actualizarArchivo(listaArmas));
                    }
                    console.log('------Datos del arma actualizados con exito------');
                    break;
                case 'Borrar un arma':
                    if (listaArmas.length === 0) {
                        console.log('No hay armas registradas');
                    } else {
                        const respuestaSelecBorrar = await promesaSeleccionarArma(listaArmas.map(
                            valorActual => {
                                return valorActual.gun;
                            }
                        ));
                        listaArmas.splice(listaArmas.findIndex(
                            valorActual => {
                                return valorActual.gun === respuestaSelecBorrar.updateGun;
                            }
                        ), 1);
                        await promesaEscribirArma(actualizarArchivo(listaArmas));
                    }
                    console.log('------Arma borrada con exito------');
                    break;
                case 'Salir':
                    validadorSalida = false;
                    console.log('------Hasta la proxima------');
                    break;
            }
        }
    } catch (error) {
        console.error('Se produjo un error:\n', error);
    }
}

const respuestaSistema = sistemaArmasCRUD();