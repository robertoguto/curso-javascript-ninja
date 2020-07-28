//# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

//js

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function somaArgumentos(valorA, valorB) {
    return valorA + valorB;
}
// var mostra = somaArgumentos(10, 10);
// console.log(somaArgumentos(10, 10));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var invocaFuncao = somaArgumentos(10, 2) + 5;
console.log(invocaFuncao);

// Qual o valor atualizado dessa variável?

// 17

// Declare uma nova variável, sem valor.

var semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function adicionaValor(semValor) {
    semValor = 10;

    return `O valor da variável agora é ${semValor}.
    Onde ${semValor} é o novo valor da variável.`;
}

// Invoque a função criada acima.

console.log(adicionaValor());

// Qual o retorno da função? (Use comentários de bloco).

/*
O valor da variável agora é 10.
    Onde 10 é o novo valor da variável.



Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplicaSeTiver(valor1, valor2, valor3) {
    if (valor1 === undefined || valor2 === undefined || valor3 === undefined) {
        return "Preencha todos os valores corretamente!";
    } else {
        return valor1 * valor2 * valor3 + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

var mostra = multiplicaSeTiver(10, 2);
console.log(mostra);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

var mostraCerto = multiplicaSeTiver(10, 10, 10);
console.log(mostraCerto);
// console.log(multiplicaSeTiver(10, 10, 10));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//o resultado foi de 1002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

// function retornaSeTiverRequisitos_(numero1, numero2, numero3) {
//     if (numero1 && !numero2 && !numero3) {
//         return numero1;
//     } else if (numero1 && numero2 && !numero3) {
//         return numero1 + numero2;
//     } else if (numero1 && numero2 && numero3) {
//         return (numero1 + numero2) / numero3;
//     } else if (numero1 === undefined) {
//         return false;
//     } else {
//         return null;
//     }
// }

//modo muito mais verboso

function retornaSeTiverRequisitos(numero1, numero2, numero3) {
    var quantidadeDeArgumentos = arguments.length; // pega o número de argumentos que existe
    if (quantidadeDeArgumentos == 1) {
        return numero1;
    } else if (quantidadeDeArgumentos == 2) {
        return numero1 + numero2;
    } else if (quantidadeDeArgumentos == 3) {
        return (numero1 + numero2) / numero3;
    } else if (quantidadeDeArgumentos == 0) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(retornaSeTiverRequisitos());
console.log(retornaSeTiverRequisitos(1));
console.log(retornaSeTiverRequisitos(1, 1));
console.log(retornaSeTiverRequisitos(5, 10, 2));
console.log(retornaSeTiverRequisitos(1, 1, 1, 1));
