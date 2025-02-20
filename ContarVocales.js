function contarVocales(palabra) {
    const vocales = ["a", "e", "i", "o", "u"];
    palabra = palabra.toLowerCase();
    
    let contador = 0;
    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Hola"));