import { animal } from "./exercicio04";

const animal1 = new animal();
const animal2 = new animal();
const animal3 = new animal();


animal1.setEspecie("vaca");
animal1.setRaca("Nelore");
animal1.setNome("Mimosa");
animal1.setIdade(5);
animal1.setPeso(475);

console.log("----Animal 1----");
console.log(`Espécie: ${animal1.getEspecie()}`);
console.log(`Raça: ${animal1.getRaca()}`);
console.log(`Nome: ${animal1.getNome()}`);
animal1.emitirSom(); 
console.log(`Idade: ${animal1.getIdade()} anos`);
animal1.verificarIdade(); 
console.log(`Peso antigo: ${animal1.getPeso()} KG`);
animal1.alimentar(10); 
console.log(`Peso atual: ${animal1.getPeso()} KG`);
animal1.identificarPorte(); 



animal2.setEspecie("cachorro");
animal2.setRaca("Boiadeiro de Berna");
animal2.setNome("Jovi");
animal2.setIdade(2);
animal2.setPeso(40);

console.log("----Animal 2----");
console.log(`Espécie: ${animal2.getEspecie()}`);
console.log(`Raça: ${animal2.getRaca()}`);
console.log(`Nome: ${animal2.getNome()}`);
animal2.emitirSom(); 
console.log(`Idade: ${animal2.getIdade()} anos`);
animal2.verificarIdade();
console.log(`Peso antigo: ${animal2.getPeso()} KG`);
animal2.alimentar(0.5); 
console.log(`Peso atual: ${animal2.getPeso()} KG`);
animal2.identificarPorte();



animal3.setEspecie("galinha");
animal3.setRaca("Canela preta");
animal3.setNome("Cluck Norris");
animal3.setIdade(4);
animal3.setPeso(2);

console.log("----Animal 3----");
console.log(`Espécie: ${animal3.getEspecie()}`);
console.log(`Raça: ${animal3.getRaca()}`);
console.log(`Nome: ${animal3.getNome()}`);
animal3.emitirSom();
console.log(`Idade: ${animal3.getIdade()} anos`);
animal3.verificarIdade();
console.log(`Peso antigo: ${animal3.getPeso()} KG`);
animal3.alimentar(0.2); 
console.log(`Peso atual: ${animal3.getPeso()} KG`);
animal3.identificarPorte();
