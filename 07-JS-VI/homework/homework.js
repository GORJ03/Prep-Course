// Do not change any of the function names

function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    let nuevoNombre = "";

    for (let i = 0; i < nombre.length; i++) {

        if (i === 0) {
            nuevoNombre += nombre[i].toUpperCase();
            continue;
        }

        nuevoNombre += nombre[i].toLowerCase();


    }

    return nuevoNombre;

}

function invocarCallback(cb) {
    // Invoca al callback `cb`
    //Tu código:
    cb();
}



function operacionMatematica(n1, n2, cb) {
    //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
    //Devolver el callback pasándole como argumentos los números recibidos.
    //Tu código:

    setTimeout(() => {
        cb(n1, n2, n1 * n2);
    }, 1000);

    return cb(5, 6);
}

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:
    let suma = 0;

    /*for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }
    cb(suma);*/

    /*numeros.forEach((item) => {
        suma += item;
    });
    cb(suma);*/
    suma = numeros.reduce((a, x) => a + x);
    cb(suma);


}

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    //Tu código:
    /*for (let index = 0; index < array.length; index++) {
        cb(array[index]);

    }*/

    array.forEach((item) => cb(item));
}


function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código:


    let nuevoArray = array.map((item) => cb(item));

    return nuevoArray;

}

function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:

    let nuevoArray = array.filter((item) => item[0] === 'a');


    return nuevoArray;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    mayuscula,
    invocarCallback,
    operacionMatematica,
    sumarArray,
    forEach,
    map,
    filter
};