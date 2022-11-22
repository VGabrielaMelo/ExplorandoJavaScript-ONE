console.log(`Trabalhando com Listas`);

console.log("Destinos possíveis:");

const listaDeDestinos = new Array( 
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeio`, 
    `Santos`, 
    `Porto Alegre`, 
    `Florianopolis`
); // criando lista

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); // adicionando itens na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // removendo um item da lista (posição, quantidade)

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);