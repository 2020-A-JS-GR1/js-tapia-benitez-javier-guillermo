const inquirer = require('inquirer');
const fs = require('fs');

const pathArmas = './04-listaArmas.txt';
const pathCategorias = './04-listaCategorias.txt';

const promesaMenuPrincipal = () => {
    return inquirer
        .prompt({
            type: 'rawlist',
            name: 'menu',
            message: 'Bienvenido al sistema de armas. Escoja una opcion:',
            choices: ['Categoria', 'Arma', 'Salir'],
        });
}

const promesaCRUD = (opcion) => {
    return inquirer
        .prompt({
            type: 'rawlist',
            name: 'opcion',
            message: 'Sistema de ' + opcion + '. Escoja una opcion:',
            choices: ['Agregar', 'Listar', 'Actualizar', 'Borrar', 'Volver'],
        });
}

const promesaAgregarCategoria = (nombre, descripcion) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'nombre',
                message: '¿Que categoria es?:',
                default: nombre,
            },
            {
                type: 'input',
                name: 'descripcion',
                message: '¿Cual es la descripcion de la categoria?:',
                default: descripcion,
            },
        ]);
}

const promesaAgregarArma = (listaCategorias, categoria, nombre, mira, balas, skin) => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'categoria',
                message: '¿Cual es la categoria del arma?:',
                choices: listaCategorias,
                default: categoria,
            },
            {
                type: 'input',
                name: 'nombre',
                message: '¿Cual es el nombre del arma?:',
                default: nombre,
            },
            {
                type: 'list',
                name: 'mira',
                message: 'Desea que el arma este equipada con una mira?:',
                choices: ['Si', 'No'],
                default: mira,
            },
            {
                type: 'number',
                name: 'balas',
                message: 'Cual es la capacidad del cargador?:',
                default: balas,
            },
            {
                type: 'list',
                name: 'skin',
                message: 'Desea que el arma este equipada con una skin?:',
                choices: ['Si', 'No'],
                default: skin,
            },
        ]);
}

const promesaListar = (listaCategorias) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'categoria',
            message: 'Categorias de armas:',
            choices: listaCategorias,
        });
}

const promesaActualizar = (lista) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'actualizar',
            message: 'Seleccione una opcion:',
            choices: lista,
        });
}

const promesaLeerArchivo = (path) => {
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

const promesaEscribirArchivo = (path, data) => {
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

async function agregarRegistro(promesa, archivo, path) {
    if (archivo !== '') {
        await promesaEscribirArchivo(path, archivo + '\n' + JSON.stringify(promesa));
    } else {
        await promesaEscribirArchivo(path, JSON.stringify(promesa));
    }
}

async function actualizarRegistro(lista, opcion, path, listaPadre) {
    if (lista === undefined) {
        console.log('------No hay registros------');
    } else {
        const respuestaSelecActualizar = await promesaActualizar(lista.map(
            valorActual => {
                return valorActual.nombre;
            }
        ));
        const registroAnterior = lista[lista.findIndex(
            valorActual => {
                return valorActual.nombre === respuestaSelecActualizar.actualizar;
            }
        )];
        if (opcion === 'Categoria') {
            lista[lista.findIndex(
                valorActual => {
                    return valorActual.nombre === respuestaSelecActualizar.actualizar;
                }
            )] = await promesaAgregarCategoria(registroAnterior.nombre, registroAnterior.descripcion);
            await promesaEscribirArchivo(path, actualizarArchivo(lista));
        } else {
            lista[lista.findIndex(
                valorActual => {
                    return valorActual.nombre === respuestaSelecActualizar.actualizar;
                }
            )] = await promesaAgregarArma(listaPadre, registroAnterior.categoria, registroAnterior.nombre, registroAnterior.mira, registroAnterior.balas, registroAnterior.skin);
            await promesaEscribirArchivo(path, actualizarArchivo(lista));
        }
        console.log('------Los datos se actualizaron con exito------');
    }
}

async function borrarRegistro(lista, path) {
    if (lista === undefined) {
        console.log('------No hay registros------');
    } else {
        const respuestaSelecBorrar = await promesaActualizar(lista.map(
            valorActual => {
                return valorActual.nombre;
            }
        ));
        lista.splice(lista.findIndex(
            valorActual => {
                return valorActual.nombre === respuestaSelecBorrar.actualizar;
            }
        ), 1);
        await promesaEscribirArchivo(path, actualizarArchivo(lista));
        console.log('------Registro borrado con exito------');
    }
}

function actualizarArchivo(lista) {
    let listaActualizada = '';
    lista.forEach(
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

function filtrarLista(lista, categoria) {
    if (lista === undefined) {
        return '------No hay registros------';
    } else {
        if (categoria === 'Todas' || categoria === undefined) {
            return lista;
        } else {
            if (lista
                .some(
                    valorActual => {
                        return valorActual.categoria === categoria;
                    }
                )) {
                return (lista
                        .filter(
                            (valorActual) => {
                                return valorActual.categoria === categoria;
                            }
                        )
                );
            } else {
                return '------No se a registrado arma en ' + categoria + '------';
            }
        }
    }
}

function cargarLista(respuesta) {
    if (respuesta !== '') {
        return respuesta.split('\n').map(
            valorActual => {
                return JSON.parse(valorActual);
            }
        );
    }
}

async function sistemaCRUD(opcion) {
    try {
        let validarRegreso = true;
        while (validarRegreso) {
            const respuestaLeerCategorias = await promesaLeerArchivo(pathCategorias);
            const respuestaLeerArmas = await promesaLeerArchivo(pathArmas);
            const listaCategorias = cargarLista(respuestaLeerCategorias);
            const listaArmas = cargarLista(respuestaLeerArmas);
            const respuestaCRUD = await promesaCRUD(opcion);
            switch (respuestaCRUD.opcion) {
                case 'Agregar':
                    if (opcion === 'Categoria') {
                        await agregarRegistro(await promesaAgregarCategoria(), respuestaLeerCategorias, pathCategorias);
                        console.log('------Categoria agregada con exito------');
                    } else {
                        if (listaCategorias.length === 0) {
                            console.log('------No existen categorias registradas. Primero registre una categoria------');
                            validarRegreso = false;
                        } else {
                            await agregarRegistro(await promesaAgregarArma(listaCategorias.map(
                                valorActual => valorActual.nombre
                            )), respuestaLeerArmas, pathArmas);
                            console.log('------Arma registrada con exito------');
                        }
                    }
                    break;
                case 'Listar':
                    if (listaCategorias === undefined) {
                        console.log('------No existen registros------');
                    } else {
                        if (opcion === 'Categoria') {
                            console.table(filtrarLista(listaCategorias));
                        } else {
                            const nombreCategorias = listaCategorias.map(
                                valorActual => valorActual.nombre
                            );
                            nombreCategorias.push('Todas')
                            const respuestaListarArmas = await promesaListar(nombreCategorias);
                            console.table(filtrarLista(listaArmas, respuestaListarArmas.categoria));
                        }
                    }
                    break;
                case 'Actualizar':
                    if (opcion === 'Categoria') {
                        await actualizarRegistro(listaCategorias, opcion, pathCategorias);
                    } else {
                        await actualizarRegistro(listaArmas, opcion, pathArmas, listaCategorias.map(
                            valorActual => valorActual.nombre
                        ));
                    }
                    break;
                case 'Borrar':
                    if (opcion === 'Categoria') {
                        await borrarRegistro(listaCategorias, pathCategorias)
                    } else {
                        await borrarRegistro(listaArmas, pathArmas);
                    }
                    break;
                case 'Volver':
                    validarRegreso = false;
                    break;
            }
        }
    } catch
        (error) {
        console.error('Se produjo un error:\n', error);
    }
}

async function menuPrincipal() {
    try {
        let validarSalida = true;
        while (validarSalida) {
            const respuestaMenu = await promesaMenuPrincipal();
            switch (respuestaMenu.menu) {
                case 'Categoria':
                    await sistemaCRUD(respuestaMenu.menu);
                    break;
                case 'Arma':
                    await sistemaCRUD(respuestaMenu.menu);
                    break;
                case 'Salir':
                    validarSalida = false;
                    console.log('------Hasta la proxima------');
                    break;
            }
        }
    } catch (error) {
        console.error('Se produjo un error:\n', error);
    }
}

const respuestaSistema = menuPrincipal();