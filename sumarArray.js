// // Función para sumar todos los números de un array y que devuelva el resultado
// Utilizando el método .reduce() el cual reduce todos los valores de un array para que
// sean operables matemáticamente

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(suma);