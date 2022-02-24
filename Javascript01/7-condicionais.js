console.log(`Trabalhando com Listas o/`);

console.log("Destinos possíveis: ");
const listaDeDestinos = new Array(
    `Brasília`,
    `Rio de Janeiro`,
    `Campinas`,
    `Angra dos Reis`,
    `Goiânia`,
    `Manaus`
)

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

//console.log("Lista de destinos pre push: ",listaDeDestinos);
listaDeDestinos.push(`Curitiba`); //adicionando um destino
listaDeDestinos.push(`Porto Alegre`); //adicionando outro destino
console.log("Lista de destinos após push: ",listaDeDestinos);

if(idadeComprador > 17 || estaAcompanhada == true){
console.log("Boa Viagem !! "+
    "\n\nRemovendo destino: ",listaDeDestinos[1]);
    listaDeDestinos.splice(1,1);
} /*else  if (estaAcompanhada == true){
    console.log("Comprador menor de idade, mas acompanhado. Compra para o"+
    `destino ${listaDeDestinos[1]} realizada com sucesso... Removendo destino.`);
    listaDeDestinos.splice(1,1);
}*/else {
    console.log("Comprador menor de idade, "+
    `venda para o destino ${listaDeDestinos[1]} não permitida.`);
}
//console.log(listaDeDestinos);
console.log("Embarcando...\n\n");
if((idadeComprador > 17 || estaAcompanhada == true ) && temPassagemComprada == true){
    console.log("Boa viagem.");
} else {
    console.log("Você não pode embarcar.")
}
