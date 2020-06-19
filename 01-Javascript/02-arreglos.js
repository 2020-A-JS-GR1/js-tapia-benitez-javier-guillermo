const arreglo = [1, 2, 3, 4, 5, 8, 9, 10];
// arreglo = 1;
/*let cualquierCosa = "ASDF";
cualquierCosa = 2;
cualquierCosa = true;
cualquierCosa = undefined;
cualquierCosa = null;
cualquierCosa = {};
cualquierCosa = [];
console.log(cualquierCosa);*/
const arregloTodo = [true, 1, 1.2, "Adrian", undefined, null, {}, [1, 2, true, "A"]];
let a = [1, 2, 3];
const b = Object.assign([], a);

// for of
for (let numero of arreglo) { // VALORES
    console.log('numero', numero);
}

// for in
for (let indice in arreglo) { // INDICES
    arreglo[indice];
    console.log('indice', indice);
}

arreglo.push(11); // Añadir al final un elemento
console.log(arreglo);
// [1, 2, 3, 4, 5, 8, 9, 10, 11]
arreglo.pop(); // Eliminar al final un elemento
console.log(arreglo);
// [1, 2, 3, 4, 5, 8, 9, 10]
arreglo.unshift(6); // Añadir al principio del rreglo
console.log(arreglo);
// [6, 1, 2, 3, 4, 5, 8, 9, 10]
arreglo.splice(0, 1);
console.log(arreglo);
arreglo.splice(0, 0, 3, 4, 5);
console.log(arreglo);

const indice = arreglo.indexOf(9);
console.log('indice', indice); // 6
arreglo.splice(arreglo.indexOf(9), 1);
console.log(arreglo);
