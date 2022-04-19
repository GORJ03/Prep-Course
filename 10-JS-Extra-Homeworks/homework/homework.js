// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    let arrayObject = Object.keys(objeto).map((key) => [key, objeto[key]]);
    return arrayObject;
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí

    let caracter;
    let contador = 0;
    let object = {};

    for (let i = 0; i < string.length; i++) {

        if (caracter === string[i]) {
            continue;
        }

        caracter = string[i];

        for (let x = 0; x < string.length; x++) {
            if (caracter === string[x]) {
                contador++;
            }
        }
        //console.log("{"+caracter+":"+contador+"}");
        object[caracter] = contador;
        contador = 0;
    }

    return object;


}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    let exregularmay = /[A-Z]/g;
    let exregularmin = /[a-z]/g;
    let mayusculas = s.match(exregularmay);
    let minusculas = s.match(exregularmin);
    let nuevaCadena = "";
    console.log(mayusculas);
    console.log(minusculas);
    let nuevaCadenaArray = mayusculas.concat(minusculas);


    nuevaCadenaArray.forEach(item => nuevaCadena += item);
    return nuevaCadena;

}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí

    let cadena = str.split("");
    let cadenaReverse = cadena.reverse().join("");
    cadenaReverse = cadenaReverse.split(" ");

    return cadenaReverse.reverse().join(" ");
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    if (numero < 10 && numero >= 0) {
        return "Es capicua";
    }

    if (numero % 11 === 0 && numero > 9 && numero < 100) {
        return "Es capicua";
    }

    let nuevoNumero = numero.toString();
    nuevoNumero = nuevoNumero.split("");
    let contador = nuevoNumero.length;
    let x = 0;

    nuevoNumero.forEach((item, index, array) => {
        contador--;
        if (item === array[contador]) {
            //console.log("true " + item + " = " + array[contador]);
            x++;
        }

    });
    if (x === nuevoNumero.length) {
        return "Es capicua";
    }

    return "No es capicua";


}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    let cadenaArray = cadena.split("");

    let cadenaFilter = cadenaArray.filter(item => item !== "a" && item !== "b" && item !== "c");


    return cadenaFilter.join("");

}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí

    let nuevoArray = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        if (a.length < b.length) {
            return -1;
        }
        return 0;
    });

    return nuevoArray;


}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    let nuevoArreglo = arreglo1.concat(arreglo2);

    let union = nuevoArreglo.filter((item, index) => nuevoArreglo.indexOf(item) !== index);

    return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};