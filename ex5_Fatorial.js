function fatorial(n) { // n é o número que a gnt quer saber o fatorial
    let resultado = 1; // começa com o valor 1 porque qualquer número multplicado por 0 dá 0

    for (let i = 2; i <= n; i++) { // começa com o valor 2 porque 1 x 1 dá 1, então não muda nada. Já o i <= n quer dizer que ele vai do 2 até n (nesse caso, até 9)
        resultado *= i; // resultado = resultado * i
    }
    return resultado;
}

console.log(fatorial(9));

// 5! = 1 x 2 x 3 x 4 x 5 = 120

// Primeiro ciclo: 5! = 1 * 2 = 2
// O produto da multplicação do primeiro ciclo (que é 2) vai ser guardado em uma "caixa"
// Agora no segundo ciclo, o valor dentro dessa caixa vai substituir o 1 na conta, e como i aumentou +1 pois o loop ta rodando, vai ficar: 2 * 3 = 6
// A mesma coisa vai se repetir, pois vamos o valor antigo que estava na caixa (que era 2) e botar o 6 dentro.
