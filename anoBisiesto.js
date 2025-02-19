function anoBisiesto (n) {

    if (n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0)) {
        console.log(`${n} es un ano bisiesto`);
    } else {
        console.log(`${n} no us un ano bisiesto`);
    }
 }
 
 anoBisiesto (1900);