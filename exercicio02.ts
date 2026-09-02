export class carro {
    private modelo: string = "";
    private marca: string = "";
    private KMrodados: number = 0;
    private cor: string = "";
    private preco: number = 0;

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getModelo(): string {
        return this.modelo
    }

    
    setMarca(marca: string): void {
        this.marca = marca;
    }

    getMarca(): string {
        return this.marca;
    }

    
    setKMrodados(KMrodados: number): void {
        this.KMrodados = KMrodados;
    }

    getKMrodados(): number {
        return this.KMrodados
    }

    
    setCor(cor: string): void {
        this.cor = cor;
    }

    getCor(): string {
        return this.cor;
    }

    setPreco(preco: number): void{
        this.preco = preco;
    }

    getPreco(): number {
        return this.preco;
    }

    public verificarValor(): void{
        if (this.preco > 200000){
            console.log ("Seu carro é considerado de luxo")
        }
        else if (this.preco > 100000) {
            console.log("Seu carro é considerado caro")
        }

        else {
            console.log("O carro é considrado normal")
        }
    }

    public verificarDesvalorizaçao(): void {
        if (this.KMrodados > 15000){
            console.log ("Seu carro perdeu valor consideravel por conta dos muitos KM rodados.")
        }
        else {
            console.log("O seu carro não perde valor significante por conta dos KM rodados.")
        }
    }

    public verificarCor(): void {
        if (this.cor.trim().toLowerCase() === "amarelo" || this.cor.trim().toLowerCase() === "vermelho" || this.cor.trim().toLowerCase() === "azul") {
            console.log("Esse carro possui uma cor chamativa e faz parte das cores primarias!")
        }
    }

    public calcularIPVA(): void {
        const valorIPVA: number = this.preco * 0.04;

        console.log(`O valor estimado do IPVA para o ${this.modelo} é R$ ${valorIPVA}`)
    }

}