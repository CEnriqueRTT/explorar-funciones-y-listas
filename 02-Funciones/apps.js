/* 7- función que verifica números */
/* Crear una función que verifique si un número es positivo, cero o negativo. Muestra un mensaje mediante la consola. */
let numeroIngresado = prompt("Ingrese un número");
function verificarNumero(numero) {
    if (numero > 0) {
        return "es positivo";
    } else if (numero == 0) {
        return "es cero";
    } else {
        return "es negativo";
    }
}
// Llamada a la función y uso del valor devuelto
let resultadoDeVerificarNumero = verificarNumero(numeroIngresado);
console.log('El número: ' + numeroIngresado + ', ' + resultadoDeVerificarNumero);  // Imprime

/* 9- Desafío: hora de practicar */
/* 9.1- Crear una función que muestre "¡Hola, mundo!" en la consola. */
function mostrarHola() {
    console.log("¡Hola, mundo!");
}
mostrarHola();

/* 9.2- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. */
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, [${nombre}]!`);
}
mostrarHolaNombre("Enrique");

/* 9.3- Crear una función que reciba un número como parámetro y devuelva el doble de ese número. */
function calcularDoble(numero) {
    return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

/* 9.4- Crear una función que reciba tres números como parámetros y devuelva su promedio. */
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

/* 9.5- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos. */
function encontrarMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = encontrarMayor(5, 15);
console.log(numeroMayor);

/* 9.6- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */
function cuadrado(numero) {
    return numero * numero;
}
let resultado = cuadrado(2);
console.log(resultado);
