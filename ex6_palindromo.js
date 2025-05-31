function ehPalindromo(palavra) {
    palavra = palavra.toUpperCase; // deixar a palavra toda padronizada em letra maiúscula
    let palavraLimpa = "";

    for (let i = 0; i < palavra.length; i++) { //esse FOR é só para limpar a palavra de espaços e tals
        let letra = palavra[i]; // palavra[i] é pra pegar o índice de cada letra da palavra

        if ((letra >= "a" && letra <= "z") || (letra >= "0" && letra <= "9")) {
            palavraLimpa += letra; // verifica se a letra é realmente uma letra ou um número, se for, ai pode ser usado 
        }
    }

    // Essa parte embaixo segue a mesma lógica do exercício 4 (voltar lá para ver a explicação)
    let palavraInvertida = "";

    for (let i = palavraLimpa.length - 1; i >= 0; i--) {
        palavraInvertida += palavraLimpa[i];
    }

    return palavraLimpa === palavraInvertida; // Retorna o booleano true se a palavra limpa for igual a ela mesma só que invertida. Aí se essa afirmação for falsa, retorna false.

}

console.log(ehPalindromo("Arara"));