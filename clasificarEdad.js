function clasificarEdad (n) {

    if (n === 0) {
        console.log (`${n} no es una edad valida`)
    } else if (n <= 17) {
        console.log("Eres menor de edad");
    } else if (n >= 18 && n <= 64) {
        console.log("Eres un adulto");
    } else if (n >= 65) {
        console.log("Eres un adulto Mayor");
    }
 }
 
 clasificarEdad(0);