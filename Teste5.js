console.log("Trabalhando com Condicionais");

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

const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;

// if e else
if(idadeComprador >= 18){
    console.log("Comprador maior de Idade. Compra finalizada com sucesso");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}else if(estaAcompanhada){
    console.log("Comprador menor de idade e acompanhado. Compra finalizada com sucesso");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}else{
    console.log("Comprador menor de idade e desacompanhado. Não foi possivel finalizar a compra");
};

// ou
if(idadeComprador >= 18 || estaAcompanhada){

    console.log("\n Comprador maior de idade ou acompanhado. Compra finalizada com sucesso \n");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}else{

    console.log("\n Comprador menor de idade e desacompanhado. Não foi possivel finalizar a compra \n");
};

// e
console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Você pode embarcar. Boa Viagem!");
}else{
    console.log("Você não pode embarcar!");
}

console.log(listaDeDestinos);
