function maiorDeTres(a, b, c) {
    let combinacoes = [a, b, c];
    let maior = combinacoes[0];

    for (let i = 1; i < combinacoes.length; i++) {
        if (combinacoes[i] > maior) {
            maior = combinacoes[i];
        }
    }
    console.log(`O maior número é: ${maior}`);

    return maior;
}

maiorDeTres(5, 9, 2);
maiorDeTres(-3, -7, -1);