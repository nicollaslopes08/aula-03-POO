import {carro} from "./exercicio02";

const carro1 = new carro();
const carro2 = new carro();

carro1.setModelo("Camaro");
carro1.setMarca("Marca: chevrolet");
carro1.setKMrodados(50000);
carro1.setCor("Amarelo");
carro1.setPreco(80000)
;

carro2.setModelo("GTR-R35");
carro2.setMarca("Nissan");
carro2.setKMrodados(1800);
carro2.setCor("Azul");
carro2.setPreco(300000);
carro2.calcularIPVA

console.log("----carro1----");
console.log(carro1.getModelo());
console.log(carro1.getMarca());
console.log(carro1.getKMrodados());
console.log(carro1.verificarDesvalorizaçao());
console.log(carro1.getCor());
console.log(carro1.verificarCor());
console.log(carro1.getPreco());
console.log(carro1.calcularIPVA());
console.log(carro1.verificarValor());

console.log("----carro2----");
console.log(carro2.getModelo());
console.log(carro2.getMarca());
console.log(carro2.getKMrodados());
console.log(carro2.verificarDesvalorizaçao());
console.log(carro2.getCor());
console.log(carro2.verificarCor());
console.log(carro2.getPreco());
console.log(carro2.calcularIPVA());
console.log(carro2.verificarValor());

