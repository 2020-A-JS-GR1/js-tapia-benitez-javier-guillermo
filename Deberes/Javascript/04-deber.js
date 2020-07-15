const inquirer = require('inquirer');
const fs = require('fs');

const path = './04-listaDeArmas.txt';
let validadorSalida = true;

const promesaOpcionCRUD = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'option',
            message: 'Escoga una opcion:',
            choices: ['Agregar un arma', 'Listar armas', 'Actualizar datos de un arma', 'Borrar un arma', 'Salir'],
        });
}

const promesaIngresarArma = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'category',
                message: 'Que tipo de arma es?',
                choices: ['Rifle de asalto', 'Francotirador', 'Subfusil', 'Ametralladora ligera', 'Escopeta', 'Pistola'],
            },
            {
                type: 'input',
                name: 'gun',
                message: 'Cual es el nombre del arma?',
            }
        ]);
}

const promesaListarArmas = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'category',
            message: 'Categoria',
            choices: ['Todas', 'Rifle de asalto', 'Francotirador', 'Subfusil', 'Ametralladora ligera', 'Escopeta', 'Pistola'],
        });
}

const promesaSeleccionarArma = (armas) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'updateGun',
            message: 'Seleccione un arma',
            choices: armas,
        });
}

const promesaActualizarArma = (arma) => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'category',
                message: 'Que tipo de arma es?',
                choices: ['Rifle de asalto', 'Francotirador', 'Subfusil', 'Ametralladora ligera', 'Escopeta', 'Pistola'],
            },
            {
                type: 'input',
                name: 'gun',
                message: 'Cual es el nombre del arma?',
                default: arma,
            }
        ]);
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
                    // Agregar mas atributos al arma
                    const respuestaIngresarArma = await promesaIngresarArma();
                    if (respuestaLeerArmas !== '') {
                        await promesaEscribirArma(respuestaLeerArmas + '\n' + JSON.stringify(respuestaIngresarArma));
                    } else {
                        await promesaEscribirArma(JSON.stringify(respuestaIngresarArma));
                    }
                    break;
                case 'Listar armas':
                    // Controlar si no hay armas registradas
                    // Controlar si no hay armas registradas en una categoria
                    const respuestaListarArmas = await promesaListarArmas();
                    switch (respuestaListarArmas.category) {
                        case 'Todas':
                            console.log(listaArmas);
                            break;
                        case 'Rifle de asalto':
                            console.log(listaArmas
                                .filter(
                                    (valorActual) => {
                                        return valorActual.category === 'Rifle de asalto';
                                    }
                                )
                            );
                            break;
                        case 'Francotirador':
                            console.log(listaArmas
                                .filter(
                                    (valorActual) => {
                                        return valorActual.category === 'Francotirador';
                                    }
                                )
                            );
                            break;
                        case 'Subfusil':
                            console.log(listaArmas
                                .filter(
                                    (valorActual) => {
                                        return valorActual.category === 'Subfusil';
                                    }
                                )
                            );
                            break;
                        case 'Ametralladora ligera':
                            console.log(listaArmas
                                .filter(
                                    (valorActual) => {
                                        return valorActual.category === 'Ametralladora ligera';
                                    }
                                )
                            );
                            break;
                        case 'Escopeta':
                            console.log(listaArmas
                                .filter(
                                    (valorActual) => {
                                        return valorActual.category === 'Escopeta';
                                    }
                                )
                            );
                            break;
                        case 'Pistola':
                            console.log(listaArmas
                                .filter(
                                    (valorActual) => {
                                        return valorActual.category === 'Pistola';
                                    }
                                )
                            );
                            break;
                    }
                    break;
                case 'Actualizar datos de un arma':
                    // Controlar si no armas para actualizar
                    const respuestaSelecActualizar = await promesaSeleccionarArma(listaArmas.map(
                        valorActual => {
                            return valorActual.gun;
                        }
                    ));
                    const respuestaActualizarArma = await promesaActualizarArma(respuestaSelecActualizar.updateGun);
                    listaArmas[listaArmas.findIndex(
                        valorActual => {
                            return valorActual.gun === respuestaSelecActualizar.updateGun;
                        }
                    )] = respuestaActualizarArma;
                    let listaActualizada = '';
                    listaArmas.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaArmas.length - 1) {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual);
                            }

                        }
                    );
                    await promesaEscribirArma(listaActualizada);
                    break;
                case 'Borrar un arma':
                    // Controlar si no armas para borrar
                    const respuestaSelecBorrar = await promesaSeleccionarArma(listaArmas.map(
                        valorActual => {
                            return valorActual.gun;
                        }
                    ));
                    listaArmas.splice(listaArmas.findIndex(
                        valorActual => {
                            return valorActual.gun === respuestaSelecBorrar.updateGun;
                        }
                    ),1);
                    let listaBorrado = '';
                    listaArmas.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaArmas.length - 1) {
                                listaBorrado = listaBorrado + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaBorrado = listaBorrado + JSON.stringify(valorActual);
                            }

                        }
                    );
                    await promesaEscribirArma(listaBorrado);
                    break;
                case 'Salir':
                    validadorSalida = false;
                    break;
            }
        }
    } catch (error) {
        console.error('Se produjo un error: ', error);
    }
}

const respuestaSistema = sistemaArmasCRUD();