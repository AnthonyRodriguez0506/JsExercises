function clasificarEdad(n) {

    if (n <= 0) {  
        console.log(`${n} no es una edad válida`);
    } else if (n <= 17) {
        console.log("Eres menor de edad");
    } else if (n <= 64) {
        console.log("Eres un adulto");
    } else {
        console.log("Eres un adulto mayor");
    }
}

clasificarEdad(-19)