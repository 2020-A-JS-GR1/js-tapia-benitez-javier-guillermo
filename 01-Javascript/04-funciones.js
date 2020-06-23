function soloNumeros(a, b, c) {
    return a - b + c; // valor a devolver
}

function soloLetras(a, b, c) { // undefined
    console.log(a, b, c);
}

soloNumeros('v', true, [1, 2, 3]);
soloNumeros();
soloNumeros(1, 2, 4, 6, 7, 8, 8);

// Funciones nombradas
function funcionNombrada() {
}

funcionNombrada();
const funcionNombradaDos = function () {
}; // funciones ANONIMAS
var funcionNombradaTres = function () {
}; // funciones SIN NONBRE
let funcionNombradaCuatro = function opcional() {
}; //
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();
// opcional() NO EXISTO

const funcionNombradaCinco = () => {
}; // FAT ARROW FUNCTIONS
const funcionNombradaSeis = (x) => {
    return x + 1;
}; // FAT ARROW FUNCTIONS
const funcionNombradaSiete = (x) => x + 1; // FAT ARROW FUNCTIONS
                                           // Una sola linea
                                           // Omito return
                                           // Omito llaves
const funcionNombradaOcho = x => x + 1; // TENGO SOLO UN PARAMETRO
                                        // Omito los parentesis
const funcionNombradaNueve = (x, y, z) => x + y + z; // TENGO SOLO UN PARAMETRO
// Omito los parentesis

function sumarNumeros(numeroInicial, // 1
                      ...otrosNumeros) { // Parametros Inf
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}

sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
