///# Desafio da semana #3

///js
// Declarar uma variável qualquer, que receba um objeto vazio.

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: "Roberto",
    sobrenome: "Nunes",
    sexo: "Masculino",
    idade: 17,
    altura: 1.7,
    peso: 50,
    andando: false,
    caminhouQuantosMetros: 0,
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function () {
    this.idade += 1;
};

pessoa.fazerAniversario();

console.log(pessoa.idade);

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function (metrosCaminhados) {
    this.caminhouQuantosMetros += metrosCaminhados;
    this.andando = true;
};

pessoa.andar(10);

console.log(pessoa.caminhouQuantosMetros, pessoa.andando);
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function () {
    this.andando = false;
};

pessoa.parar();

console.log(pessoa.andando);

//Eu so preciso fazer isso se eu vou enviar com pessoa.--- se não eu so chamo

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function () {
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`;
};

console.log(pessoa.nomeCompleto());

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostraIdade = function () {
    return `Olá, eu tenho ${pessoa.idade} anos`;
};

console.log(pessoa.mostraIdade());
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostraPeso = function () {
    return `Eu peso ${pessoa.peso}Kg`;
};

console.log(pessoa.mostraPeso());

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostraAltura = function () {
    return `Minha altura é ${pessoa.altura}m`;
};

console.log(pessoa.mostraAltura());

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.nomeCompleto(); //Roberto Nunes

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostraIdade(); //18 anos

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostraPeso(); //50Kg

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostraAltura(); //1.7m

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(pessoa.idade); // 21 anos

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

function caminhaTresVezes() {
    pessoa.andar(10);
    pessoa.andar(30);
    pessoa.andar(20);
    console.log(pessoa.caminhouQuantosMetros);
}

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(caminhaTresVezes()); //70 metros

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.andando); //False

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
// 70metros
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function () {
    var apresentacao = "Olá, eu sou ";
    apresentacao += pessoa.sexo == "Feminino" ? "a " : "o ";
    apresentacao += `${pessoa.nome} ${pessoa.sobrenome}, tenho`;
    apresentacao += pessoa.idade == 1 ? "1 anos, " : pessoa.idade + " anos, ";
    apresentacao += `${pessoa.altura}m,`;
    apresentacao += ` meu peso é ${pessoa.peso}Kg`;
    apresentacao += " e, só hoje, eu já caminhei ";
    apresentacao +=
        pessoa.caminhouQuantosMetros == 1 ? "1 metro!" : pessoa.caminhouQuantosMetros + " metros!";
    return apresentacao;
};

// Agora, apresente-se ;)
console.log(pessoa.apresentacao());
