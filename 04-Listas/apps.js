/* 3- Manipulación de listas en JS */
/* El programa debe permitir que el usuario agregue elementos a la lista y luego mostrar el contenido de la lista en la 
pantalla. Además, el usuario debe poder ver un elemento específico de la lista ingresando el índice del elemento deseado. */
let listaCompras = [];
listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");
console.log(listaCompras.length);
console.log(listaCompras[3])

/* 6- Sorteando libros */
/* Crear una función para sortear libros a los clientes. El sorteo debe hacerse de manera que todos los libros 
tengan la oportunidad de ser sorteados al menos una vez, y después de eso, el sorteo debe comenzar de nuevo.  */
let listaDeLibrosSorteados = [];
let numeroLimite = 10;  //Ejemplo de límite de libros
function sortearLibros() {
    //Vacía la lista antes de sortear si ya tiene elementos
    listaDeLibrosSorteados = [];
    while (listaDeLibrosSorteados.length < numeroLimite) {
        let libroElegido = parseInt(Math.random() * numeroLimite + 1);
        //Asegúrate de que el libro no haya sido ya sorteado
        if (!listaDeLibrosSorteados.includes(libroElegido)) {
            listaDeLibrosSorteados.push(libroElegido);
        }
    }
    console.log('La lista de libros sorteados es: ' + listaDeLibrosSorteados.join(', '));
}
//Llamada a la función para sortear los libros
sortearLibros();

/* 8- Desafío: hora de practicar */
/* 8.1- Crea una lista vacía llamada "listaGenerica". */
let listaGenerica = [];

/* 8.2- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/* 8.3- Agrega a la lista "lenguagesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/* 8.4- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" por separado. */
function mostrarLenguagesSeparadamente() {
    for (let i=0; i<lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguagesSeparadamente();

/* 8.5- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso. */
function mostrarLenguagesSeparadamenteEnInverso() {
    for (let i=lenguagesDeProgramacion.length-1; i>= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguagesSeparadamenteEnInverso();

/* 8.6- Crea una función que calcule el "promedio" de los elementos de una "lista de números". */
function calcularPromedio(lista) {
    let suma = 0;
    for (let i=0; i<lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}
let listaDeNumeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(listaDeNumeros);
console.log('El promedio es:', promedio);

/* 8.7- Crea una función que muestre en la consola el "número mayor" y el "número menor" en una lista. */
function encontrarNumeroMayorMenor(lista) {
    let numeroMayor = lista[0];
    let numeroMenor = lista[0];
    for (let i=1; i<lista.length; i++) {
        if (lista[i] > numeroMayor) {
            numeroMayor = lista[i];
        }
        if (lista[i] < numeroMenor) {
            numeroMenor = lista[i];
        }
    }
    console.log('Lista del número mayor:', numeroMayor);
    console.log('Lista del número menor:', numeroMenor);
}
let numeros = [15, 8, 25, 5, 12];
encontrarNumeroMayorMenor(numeros);

/* 8.8- Crea una función que devuelva la "suma de todos los elementos" en una lista. */
function calcularSuma(lista) {
    let suma = 0;
    for (let i=0; i<lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}
let listaNumeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(listaNumeros);
console.log('La suma de todos los elementos de la lista es:', suma);

/* 8.9- Crea una función que reciba una "lista como parámetro" y retorne el "índice de un elemento" también pasado como parámetro. Si ese "elemento no existe en la lista", "retorna -1". */
function encontrarIndiceElemento(lista, elemento) {
    for (let i=0; i<lista.length; i++) {
        if (lista[i] === elemento) {
            return i;   // Retorna el índice del elemento encontrado
        }
    }
    return -1;  // Retorna -1 si el elemento no se encuentra en la lista
}
let conjuntoDeNumeros = [11, 12, 13, 14, 15];
let elementoABuscar = 13;
let indice = encontrarIndiceElemento(conjuntoDeNumeros, elementoABuscar);
console.log('El índice del elemento', elementoABuscar, 'es:', indice);

/* 8.10- Crea una función que reciba "dos listas de números del mismo tamaño" y devuelva una nueva "lista con la suma de los elementos uno a uno". */
function sumarListas(lista1, lista2) {
    return lista1.map((elementoActualLista1, indiceElementoActualLista1) => elementoActualLista1 + lista2[indiceElementoActualLista1]);
}
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultadoDeSumarListas = sumarListas(lista1, lista2);
console.log(resultadoDeSumarListas);  

/* 8.11- Crea una función que reciba "una lista de números" y devuelva una nueva "lista con el cuadrado de cada número". */
function cuadradoLista(lista) {
    return lista.map(elementoActualLista => elementoActualLista ** 2);
}
const lista = [2, 3, 4];
const resultadoDeCuadradoLista = cuadradoLista(lista);
console.log(resultadoDeCuadradoLista);  
