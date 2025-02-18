


function PrimeNumber(N) {
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

PrimeNumber(1)
PrimeNumber(2)