// while 
console.log("Trabalhando com Loops");

console.log(" \n Destinos possíveis: \n");

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
const destino = "Porto Alegre";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let temPassagemComprada = false;

let destinoExiste = false;
let cont = 0;

// while(cont < 6){
//     if(listaDeDestinos[cont] == destino){

//         console.log("Destinos...");
//         destinoExiste = true;
//         break;
//     }
//     cont++;
// }

// console.log("Destino desejado existe? " + destinoExiste);

// if(podeComprar && destinoExiste){
//     console.log("Boa Viagem!");
// }else{
//     console.log("Desculpe, tivemos um problema no sistema!");
// };


for (let i = 0; i < 6; i++){
    if(listaDeDestinos[i] == destino){

        console.log("Destinos...");
        destinoExiste = true;
    }
}

console.log("Destino desejado existe? " + destinoExiste);
