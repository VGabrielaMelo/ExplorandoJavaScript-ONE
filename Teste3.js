console.log("Operações Aritiméticas");

console.log(2 + 2);
console.log(10 + 8 * 2);
console.log((10 + 8) * 2);



console.log("Conversão de Tipos");

console.log("Ano atual " + 2022);
console.log("2" + "1");
console.log(parseInt("2") + parseInt("1"));

console.log("10" / "2"); // Conversão automática
console.log("Gabi" / "2"); // Retorna -> NOT A NUMBER (Não é um número)

console.log("7" / "2"); 
console.log(6.5);
console.log(6,5);


console.log("Atribuição de Variáveis");

const nome = "Gabriela";
const sobrenome = "Melo";
const idade = 21;
// toda variável CONST não pode ser alterada no decorrer do código
// variável LET pod ser alterada no decorrer do código

console.log("Nome", nome, sobrenome, "Idade", idade);
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade}`);

const nomeCompleto = nome + ' ' + sobrenome;
console.log(`Meu nome é ${nomeCompleto} e tenho ${idade}`);