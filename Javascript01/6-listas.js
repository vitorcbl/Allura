console.log(`Trabalhando com Listas o/`);
/*const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioJan = `Rio de Janeiro`;*/

console.log("Destinos possíveis: ");
//console.log(salvador,saoPaulo,rioJan);


const listaDeDestinos = new Array(
    `Brasília`,
    `Rio de Janeiro`,
    `Campinas`,
    `Angra dos Reis`,
    `Goiânia`,
    `Manaus`
)
console.log("Lista de destinos pre push: ",listaDeDestinos);
listaDeDestinos.push(`Curitiba`); //adicionando um destino
listaDeDestinos.push(`Porto Alegre`); //adicionando um destino
console.log("Lista de destinos após push: ",listaDeDestinos);

/*listaDeDestinos.splice(4,3);
console.log("\nLista de destinos após o splice",listaDeDestinos);*/
console.log(listaDeDestinos[1]);
