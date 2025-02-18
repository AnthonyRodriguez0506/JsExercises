// Identificar si un numero es primo o no

function NumeroPrimo(N) {
    if (N < 2) {
        console.log(`${N} no es primo`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            console.log(`${N} no es primo`);
            return;
        }
    }

    console.log(`${N} es primo`);
}

NumeroPrimo(1)
NumeroPrimo(2)