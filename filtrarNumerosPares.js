// Función que imprime los números pares de un array. 
// Con el método filter(), que sirve para filtrar números dependiendo una condición

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(num => num % 2 === 0);

console.log(pares);
