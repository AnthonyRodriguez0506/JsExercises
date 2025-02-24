// Función que imprime el numero mas grande de un array. Con los métodos
// Math.max y Spread ("...")

const numbers = [2, 4, 64, 16, 8];

function numeroMasGrande (numbers) {
    return (Math.max(...numbers))
}

console.log(numeroMasGrande(numbers));