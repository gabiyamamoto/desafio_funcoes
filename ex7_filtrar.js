function filtrarPares(arr) {
    let numerosPares = [];

    for (let i = 0; i < arr.length; i++) {
        let numero = arr[i];

        if (numero % 2 === 0) {
            numerosPares.push(numero)
        }
    }

    return numerosPares;

}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]))