/* 4- Calculadora de promedio y situación del estudiante */
/* Resolver implementando dos funciones */
let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
let nota3 = parseFloat(prompt("Ingrese la nota 3:"));
let nota4 = parseFloat(prompt("Ingrese la nota 4:"));
function calcularPromedio(nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    return promedio;
}
function verificarAprobacion(promedio) {
    return promedio >= 12 ? "Aprobado" : "Reprobado";
}
// Llamada a la función y uso del valor devuelto
let resultadoDeCalcularPromedio = calcularPromedio(nota1, nota2, nota3, nota4);
let resultadoDeVerificarAprobacion = verificarAprobacion(resultadoDeCalcularPromedio);
// Imprimir el resultado
console.log(`Según las siguientes notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}. El promedio es: ${resultadoDeCalcularPromedio}. Por lo tanto, el estudiante se encuentra en el estado de: ${resultadoDeVerificarAprobacion}`);

/* 7- Adapta la función */
const numero = 5;
function calcularDoble(numero) {
    return numero * 2;
}
function calcularTriple(numero) {
    return numero * 3;
}
const resultadoDeCalcularDoble = calcularDoble(numero);
const resultadoDeCalcularTriple = calcularTriple(numero);
console.log(`Del número '${numero}' su doble es: ${resultadoDeCalcularDoble} y su triple es: ${resultadoDeCalcularTriple}.`);

/* 8- Para saber más: template strings */
const nombre = "Enrique";
const edad = 25;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
// Salida: Hola, soy Enrique y tengo 25 años.

/* 9- Desafío: hora de practicar */
/* 9.1- Crea una función que calcule el "índice de masa corporal(IMC)" de una persona a partir de su "altura en metros" y "peso en kilogramos", que se recibirán como parámetros. */
let altura = parseFloat(prompt("Ingrese la altura:"));
let peso = parseFloat(prompt("Ingrese el peso"));
function calcularIMC(altura, peso) {
    var IMC = peso / (altura * altura);
    return IMC;
}
let IMC = calcularIMC(altura, peso);
console.log(`La altura es: ${altura}m y el peso es: ${peso}kg. Por lo tanto, el IMC es: ${IMC}kg/m^2`);

/* 9.2- Crea una función que calcule el "valor del factorial" de un número pasado como parámetro. */
let numeroIngresado = parseInt(prompt("Ingrese un número natural o cero:"));
function calcularFactorial(numeroIngresado) {
    if (numeroIngresado === 0 || numeroIngresado === 1) {
        return 1;
    } else {
        return numeroIngresado * calcularFactorial(numeroIngresado - 1);
    }
}
let resultadoDecalcularFactorial = calcularFactorial(numeroIngresado);
console.log(`El factorial de '${numeroIngresado}' es: ${resultadoDecalcularFactorial}`);

/* 9.3- Crea una función que convierta un "valor en dólares", pasado como parámetro, y devuelva el "valor equivalente en soles(moneda peruana)". Para esto, considera que "$1,00 es igual a S/3,75". */
let valorEnDolarIngresado = parseFloat(prompt("Ingrese un valor en dólares:"));
function convertirDolaresAsoles(valorEnDolarIngresado) {
    var cotizacionDelDolar = 3.75;
    var valorEnSoles = valorEnDolarIngresado * cotizacionDelDolar;
    return valorEnSoles;
}
let valorEnSolesGenerado = convertirDolaresAsoles(valorEnDolarIngresado);
console.log(`'$${valorEnDolarIngresado}' es equivalente a 'S/${valorEnSolesGenerado}'`);

/* 9.4- Crea una función que muestre en pantalla el "área" en m^2 y el "perímetro" en m de una "sala rectangular", utilizando la "altura" y la "anchura" que se proporcionarán como parámetros. */
let alturaSalaRectangular = parseFloat(prompt("Ingrese la altura:"));
let anchuraSalaRectangular = parseFloat(prompt("Ingrese la anchura"));
function calcularAreaYperimetroRectangular(alturaSalaRectangular, anchuraSalaRectangular) {
    var area = alturaSalaRectangular * anchuraSalaRectangular;
    var perimetro = 2 * (alturaSalaRectangular + anchuraSalaRectangular);
    return "La sala rectangular tiene una altura de " + alturaSalaRectangular + "m y una anchura de: " + anchuraSalaRectangular + "m. Por lo tanto, su área es: " + area + "m^2 y su perimetro es: " + perimetro + "m.";
}
let resultadoDeCalcularAreaYperimetroRectangular = calcularAreaYperimetroRectangular(alturaSalaRectangular, anchuraSalaRectangular);
console.log(resultadoDeCalcularAreaYperimetroRectangular);

/* 9.5- Crea una función que muestre en pantalla el "área" y el "perímetro" de una "sala circular", utilizando su "radio" que se proporcionará como parámetro. Considera "Pi = 3,14". */
let radioSalaCircular = parseFloat(prompt("Ingrese el radio:"));
function calcularAreaYperimetroCircular(radioSalaCircular) {
    var pi = 3.14;
    var area = pi * radioSalaCircular * radioSalaCircular;
    var perimetro = 2 * pi * radioSalaCircular;
    return "La sala circular tiene un radio de " + radioSalaCircular + "m. Por lo tanto, su área es: " + area + "m^2 y su perimetro es:" + perimetro + "m.";
}
let resultadoDeCalcularAreaYperimetroCircular = calcularAreaYperimetroCircular(radioSalaCircular);
console.log(resultadoDeCalcularAreaYperimetroCircular);

/* 9.6- Crea una función que muestre en pantalla la "tabla de multiplicar" de un "número entero" dado como parámetro. */
let numeroEntero = parseInt(prompt("Ingrese un número entero:"));
function mostrarTablaDeMultiplicar(numeroEntero) {
    let tablaDeMultiplicar = "";  // Variable para acumular los resultados
    for (var i = 1; i <= 10; i++) {
        var resultado = numeroEntero * i;
        tablaDeMultiplicar += numeroEntero + " x " + i + " = " + resultado + "\n";  //Acumula cada línea de la "tabla de multiplicar"
    }
    return tablaDeMultiplicar;  //Devuelve toda la "tabla de multiplicar" como una "cadena de texto"
}
let resultadoDeMostrarTablaDeMultiplicar = mostrarTablaDeMultiplicar(numeroEntero);
console.log("La tabla de multiplicar es el siguiente: \n" + resultadoDeMostrarTablaDeMultiplicar);  //Muestra toda la "tabla de multiplicar" en la consola
