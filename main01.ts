import { Pessoa } from "./exercicio01";



const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();


pessoa1.setNome("Tom Cruise");
pessoa1.setIdade(60);
pessoa1.setEndereco("California, USA");
pessoa1.setProfissao("Ator");
pessoa1.setCPF("CPF: 12345678990");
pessoa1.setRG("RG: 23456789001")


pessoa2.setNome ("Messi");
pessoa2.setIdade(35);
pessoa2.setEndereco("Miami, USA");
pessoa2.setProfissao("Jogador de futebol");
pessoa2.setCPF("CPF: 32464538793");
pessoa2.setRG("RG: 346427853");


console.log("-----objeto 1-----");
console.log(pessoa1.getNome());
console.log(pessoa1.getIdade());
console.log(pessoa1.getEndereco());
console.log(pessoa1.getProfissao());
console.log(pessoa1.getCPF());
console.log(pessoa1.getRG());

console.log("-----objeto 2-----");
console.log(pessoa2.getNome());
console.log(pessoa2.getIdade());
console.log(pessoa2.getEndereco());
console.log(pessoa2.getProfissao());
console.log(pessoa2.getCPF());
console.log(pessoa2.getRG());
