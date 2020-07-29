//# Desafio da semana #4

//js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function (unicoParametro) {
    if (unicoParametro) {
        return true;
    } else {
        return false;
    }
};

// Invoque a função criada acima, passando todos os tipos de valores `false`.

console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN)); //Not a number

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log(isTruthy(true));
console.log(isTruthy("0"));
console.log(isTruthy("false"));
console.log(isTruthy({})); // chaves vazio
console.log(isTruthy([])); // colchetes vazio
console.log(isTruthy(12n));
console.log(isTruthy(3.14));
console.log(isTruthy(-3.14));
console.log(isTruthy(-42)); // ou qualquer numero a baixo de zero sem ser -0
console.log(isTruthy(Infinity));
console.log(isTruthy(-Infinity));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: "Toyoto",
    modelo: "Corolla",
    placa: "BCV3G48",
    ano: 2020,
    quantasPortas: 4,
    cor: "Cinza",
    assentos: 5,
    quantidadePessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function (novaCorCarro) {
    carro.cor = novaCorCarro;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function () {
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function () {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function () {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function () {
    return `Esse carro é um ${carro.obterMarca} ${carro.obterModelo}`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

// em cima é nome normal pois é uma declarão de função e quando vc for chamar coloca a propiredade do objeto

carro.adicionaPessoas = function (addPessoas) {
    this.quantidadePessoas += addPessoas;
};

carro.pessoasDentroDoCarro = function (quantidadePessoas) {
    if (quantidadePessoas == this.assentos) {
        return "Carro está lotado";
    } else if (quantidadePessoas > this.assentos) {
        var quantidadesDePessoasQueNaoCabem = quantidadePessoas - this.assentos;
        var fala = `Retire ${quantidadesDePessoasQueNaoCabem} `;
        fala += quantidadesDePessoasQueNaoCabem == 1 ? "pessoa " : "pessoas ";
        fala += "para caber no carro";
        return fala;
    } else {
        var quantosFalta = this.assentos - this.quantidadePessoas;
        var fala = `Falta ainda ${quantosFalta} `;
        fala += quantosFalta == 1 ? "lugar " : "lugares ";
        fala += "para preencher no carro";
        return fala;
    }
};

console.log(carro.pessoasDentroDoCarro(carro.quantidadePessoas));
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor()); //Cinza

// Mude a cor do carro para vermelho.

carro.cor = "Vermelho";

// E agora, qual a cor do carro?

console.log(carro.cor); // Vermelho

// Mude a cor do carro para verde musgo.

carro.cor = "Verde musgo";

// E agora, qual a cor do carro?

console.log(carro.cor); // Verde musgo

// Qual a marca e modelo do carro?

// Adicione 2 pessoas no carro.

carro.adicionaPessoas(2);

// Adicione mais 4 pessoas no carro.

carro.adicionaPessoas(3);

// Faça o carro encher.

console.log(carro.pessoasDentroDoCarro(carro.quantidadePessoas));

// Tire 4 pessoas do carro.

carro.adicionaPessoas(-4);

// Adicione 10 pessoas no carro.

carro.adicionaPessoas(10);

// Quantas pessoas temos no carro?

// 11 pessoas
