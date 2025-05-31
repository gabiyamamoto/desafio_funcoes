function inverteString(str) {
    let novaString = "";

    // o FOR embaixo começa do último caractere na string, até chegar no primeiro, por isso i <= 0. O i-- faz ele ir voltando um de cada vez.

    for (let i = str.length - 1; i >= 0; i--) { // o .length retorna o tamanho da string, porém a gnt quer saber o índice da última letra, por isso -1 (consultar comentario ao final do código)
        novaString += str[i];
    }
    return novaString;

}

console.log(inverteString("Thiago"))

// a b c d e
// 0 1 2 3 4 <- 4 é o último índice da string

// O .length conta que existem 5 letras, o que não tá errado. Mas como o índice começa em 0, tem que faer .length -1