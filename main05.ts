import { Cliente } from "./exercicio05";


const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.setNome("André");
cliente1.setId(175693);
cliente1.setTelefone("15-99538185");
cliente1.setCpf("45723998754");
cliente1.setRg("58729562");

cliente2.setNome("Erica");
cliente2.setId(598361);
cliente2.setTelefone("15-97845620");
cliente2.setCpf("94750205739");
cliente2.setRg("853028583");


console.log("----Cliente 1----")
cliente1.exibirFicha();
cliente1.confeirCPF();
cliente1.confeirRG();
cliente1.enviarSMS();

console.log("");
console.log("");

console.log("----Cliente 2----")
cliente2.exibirFicha();
cliente2.confeirCPF();
cliente2.confeirRG();
cliente2.enviarSMS();
