// Mutables e Inmutables
// Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
//Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Adrian"; // string
const booleano = false; // boolean
const hijos = null; // object
const zapatos = undefined // undefined
const apellido = 'Eguez'
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);

if (true == true) {
    console.log('Es verdadero');
} else {
    console.log('Es Falso');
}
if (true == false) {
    console.log('Es verdadero');
} else {
    console.log('Es Falso');
}
if ("") {
    console.log('Es verdadero');
} else {
    console.log('Es Falsy');
}
if ("Adrian") {
    console.log('Es truty');
} else {
    console.log('Es Falso');
}
if (-1) {
    console.log('Es truty'); // Truty
} else {
    console.log('Es Falso');
}
if (0) {
    console.log('Es truty');
} else {
    console.log('Es Falsy'); // Truty
}
if (1) {
    console.log('Es truty'); // Falsy
} else {
    console.log('Es Falso');
}
if (null) {
    console.log('Es truty'); // Falsy
} else {
    console.log('Es Falso');
}
if (undefined) {
    console.log('Es truty'); // Falsy
} else {
    console.log('Es Falso');
}

// Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON) - Arreglos

const adrian = {
    nombre: 'Adrian', // llave: valor,
    "apellido": 'Eguez',
    edad: 31,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda'],
}; // object

// Acceder a las propiedades del objeto
adrian.nombre // "Adrian"
adrian.apellido // 'Eguez'
adrian["nombre"]; // "Adrian"
console.log(adrian);
adrian.nombre = "Vicente";
console.log(adrian);
adrian["nombre"] = "Adrian";
console.log(adrian);
adrian.sueldo; // undefined
console.log(adrian.sueldo); // undefined
adrian.sueldo = 1.2;
console.log(adrian.sueldo); // 1.2
adrian["gastos"] = 0.8;
console.log(adrian.gastos); // 0.8
adrian.nombre = undefined;
console.log(adrian);
// console.log(Object.keys(adrian));
console.log(Object.values(adrian));
delete adrian.nombre; //Eliminar de verdad la llave nombre
// console.log(adrian);
// console.log(Object.keys(adrian));
console.log(Object.values(adrian));

// Lista de variables por valor en JS
// number
// string
// boolean
// undefined
let edadAdrian = 31;
let edadVicente = edadAdrian;
console.log(edadAdrian); // 31
console.log(edadVicente); // 31
edadAdrian = edadAdrian + 1;
console.log(edadAdrian); // 32
console.log(edadVicente); // 32

// Listas de variables por REFERENCIA en JS
// let rafael = {
//     nombre: "Rafael",
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);
let rafael = {
    nombre: "Rafael",
};
let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
/*
const arregloNumeros = []; // object

console.log(adrian);
console.log(arregloNumeros);
 */