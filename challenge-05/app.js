/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arrayAleatorio = ["JavaScript", "HTML", "CSS", "C#", "NodeJS"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function RetornaArray(ArrayAleatorio) {
    return ArrayAleatorio;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(RetornaArray(arrayAleatorio[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// Indice é o lugar que o
function retonaIndiceArray(arrayValores, numero) {
    return arrayValores[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arrayDiferentes = ["String", 99, true, undefined, "OutraString"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function retornaTudodoArray(arrayDiferentes) {
    return arrayDiferentes;
}

console.log(retornaTudodoArray(arrayDiferentes));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro) {
    var caracteristicaLivro = {
        algoritimos: {
            quantidadePaginas: 200,
            autor: "Aditya Y. Brargava",
            editora: "Novatec",
        },
        desenvolvimentoWeb: {
            quantidadePaginas: 400,
            autor: "Kyle Loudon",
            editora: "O'Reilly",
        },
        criandoPaginasWeb: {
            quantidadePaginas: 350,
            autor: "Andy Budd",
            editora: "Pearson",
        },
    };

    //se ${nomeLivro} da true e ${caracteristicaLivro[nomeLivro]} se tem ${nomeLivro} em ${caracteristicaLivro}
    if (nomeLivro && caracteristicaLivro[nomeLivro]) {
        return caracteristicaLivro[nomeLivro];
    } else {
        return caracteristicaLivro;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book("desenvolvimentoWeb"));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nomedoLivro = "desenvolvimentoWeb";

console.log(
    `O livro ${nomedoLivro} tem ${book("desenvolvimentoWeb")["quantidadePaginas"]} páginas`
);
//clo(book(nomeLivro)[OqEuQueroPegarDoLivroPesquisado])

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro ${nomedoLivro} é ${book("desenvolvimentoWeb")["autor"]}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(
    `O livro ${nomedoLivro} foi publicado pela editora ${book("desenvolvimentoWeb")["autor"]}`
);
