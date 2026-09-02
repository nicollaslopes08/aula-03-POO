export class aviao {
    private modelo: string = "";
    private capacidadePassageiro: number = 0;
    private altitudeAtual: number = 0;
    private estaVoando: boolean;
    private quantPassageiro: number = 0;
    private quantPeso: number = 0;
    private capacidadePeso: number = 0;

    private capacidadePassOk: boolean;
    private capacidadePesoOk: boolean;


    constructor (modelo: string, capacidadePassageiro: number, altitudeAtual:number, estaVoando: boolean, capacidadePeso: number,capacidadePassOk: boolean, capacidadePesoOk: boolean){
        this.modelo = modelo;
        this.capacidadePassageiro = capacidadePassageiro;
        this.altitudeAtual = altitudeAtual;
        this.estaVoando = estaVoando;
        this.capacidadePeso = capacidadePeso;
      
        this.capacidadePassOk = capacidadePassOk;
        this.capacidadePesoOk = capacidadePesoOk
    }
    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getModelo(): string {
        return this.modelo
    }

    
    setCapacidadePassageiro(capacidadePassageiro: number): void {
        this.capacidadePassageiro = capacidadePassageiro;
    }

    getCapacidadePassageiro(): number {
        return this.capacidadePassageiro;
    }

    
    setAltitude(altitude: number): void {
        this.altitudeAtual = altitude;
    }

    getAltitude(): number {
        return this.altitudeAtual
    }

    
    setEstaVoando(situaçao: boolean): void {
        this.estaVoando = situaçao;
    }

    getEstaVoando(): boolean {
        return this.estaVoando;
    }

    setQuantPassageiro(quantPassageiro: number): void{
        this.quantPassageiro = quantPassageiro;
    }

    getQuantPassageiro(): number {
        return this.quantPassageiro;
    }

    setQuantPeso(quantPeso: number): void {
        this.quantPeso = quantPeso;
    }

    getQuantPeso(): number{
        return this.quantPeso;
    }

    public situaçao(): void{
        if (this.altitudeAtual > 0){
            console.log(`O aviao esta voando a ${this.altitudeAtual} de altura`)
            this.estaVoando = true;
        }
        else {
            console.log("O aviao não esta em voo.")
        }
    }

    public capacidade(): void {
        if (this.quantPassageiro > this.capacidadePassageiro){
            console.log("A quantidade de passageiros para embarcar supera a capacidade do avião, impossivel de decolar")
           this.capacidadePassOk = false;
        }
        else {
            console.log("A quantidade de passageiros é suportada, voo liberado")
              this.capacidadePassOk = true;

        }
    }

    public verificarCapacidadePeso(): void {
        if (this.quantPeso > this.capacidadePeso) {
            console.log("A quantidade de peso supera a capacidade suportada pelo avão, impossivel de voar.")
            this.capacidadePesoOk = false
        }
        else{
            console.log("A quantidade de peso é suportada pelo aviao, voo liberado")
              this.capacidadePesoOk = true
        }
    }

    public situacaoFinal(): void {
        if (this.capacidadePassOk == false || this.capacidadePesoOk == false){
            console.log("Devido a certas situaçoes, o voo precisara ser cancelado.")
        }
        else if (this.capacidadePassOk == true && this.capacidadePesoOk== true){
            console.log("O voo pode ser liberado, todos os requisitos foram atendidos.")
        }
    }

}