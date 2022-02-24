console.log(`\nTrabalhando com Listas o/`);

console.log("\nDestinos possíveis: ");
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
let temPassagemComprada = false;
const destino = "Goiânia";
const podeComprar = (idadeComprador > 17 || estaAcompanhada == true );

console.log("\nTentativa de compra...");
let count = 0;
let destinoExiste = false;
/*while(count < listaDeDestinos.length){
    if(listaDeDestinos[count] == destino){
        //console.log(`Destino ${listaDeDestinos[count]} encontrado\n\n`);
        destinoExiste = true;
        break;
    }else if ((count +1 ) == (listaDeDestinos.length)){
        //console.log(`Destino ${destino} nao existe.\n\n`);
        destinoExiste = false;
    }
    //console.log(count);
    count++;
    
}*/
for(let i = 0; i<listaDeDestinos.length;i++){
    if(listaDeDestinos[i] == destino){
        //console.log(`Destino ${listaDeDestinos[i]} encontrado\n\n`);
        destinoExiste = true;
        break;
    }else if ((count +1 ) == (listaDeDestinos.length)){
        //console.log(`Destino ${destino} nao existe.\n\n`);
        destinoExiste = false;
    }
    //console.log(i);
}

console.log(`Destino ${destino} existe? ${destinoExiste? "sim":"não"}`);
if(podeComprar && destinoExiste){
    console.log("Boa Viagem !!");
} else {
    console.log("Desculpe, ocorreu um erro!");
}