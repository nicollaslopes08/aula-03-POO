export class animal{
    private nome: string
    private raca: string
    private idade: number
    private peso: number
    private especie: string;

      constructor (nome: string ="", idade: number = 0, peso:number=0, raca: string="", especie: string=""){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.especie = especie

    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getNome (): string{
        return this.nome
    }
    setRaca(raca: string): void {
        this.raca = raca;
    }

    getRaca (): string{
        return this.raca
    }
    setIdade(idade: number): void {
        this.idade = idade;
    }

    getIdade (): number{
        return this.idade
    }
    setPeso(peso: number): void {
        this.peso = peso;
    }

    getPeso (): number{
        return this.peso
    }

    
setEspecie(especie: string): void {
    this.especie = especie;
}

getEspecie(): string {
    return this.especie;
}

    public emitirSom(): void {
        if (this.especie.trim().toLowerCase() === "vaca" || this.especie.trim().toLowerCase() === "bezerro")
            console.log("Esse animal faz: MUUUU!");
        else if (this.especie.trim().toLowerCase() === "cachorro")
            console.log("Esse animal faz: Au Au!");
        else if (this.especie.trim().toLowerCase() === "galinha")
            console.log("Esse animal faz: cocó!");
        else if (this.especie.trim().toLowerCase() === "pinto" || this.especie.trim().toLowerCase() === "pintinho" )
            console.log("Esse animal faz: piu piu!");
        else{
            console.log("Não foi possivel reconhecer o barulho desse animal")
        }
            
    }

    public identificarPorte(): void {
        if (this.especie.trim().toLowerCase() === "vaca"){
           if (this.peso >= 550) {
                console.log("O animal é considerado de grande porte.");
            } else if (this.peso >= 450) {
                console.log("O animal é considerado de médio porte.");
            } else {
                console.log("O animal é considerado de pequeno porte.");
            }
        }
        else if (this.especie.trim().toLowerCase() === "cachorro"){
           if (this.peso >= 45) {
                console.log("O animal é considerado de porte gigante.");
            } else if (this.peso >= 25) {
                console.log("O animal é considerado de grande porte.");
            } else if (this.peso >= 10) {
                console.log("O animal é considerado de médio porte.");
            } else if (this.peso >= 5) {
                console.log("O animal é considerado de pequeno porte.");
            } else {
                console.log("O animal é considerado mini/muito pequeno porte.");
            }
        }
        else if (this.especie.trim().toLowerCase() === "galinha"){
           if (this.peso >= 3.2) {
                console.log("O animal é considerado de porte grande.");
            } else if (this.peso >= 2.2) {
                console.log("O animal é considerado de porte médio.");
            } else if (this.peso >= 1) {
                console.log("O animal é considerado de porte leve.");
            } else {
                console.log("O animal é considerado de porte mini.");
            }
        }
    }

   public verificarIdade(): void {
    if (this.especie.trim().toLowerCase() === "vaca"){
       if (this.idade >= 8) {
                console.log("O animal está em fase de envelhecimento.");
            } else if (this.idade >= 2) {
                console.log("O animal está em fase adulta e reprodutiva.");
            } else if (this.idade >= 1) {
                console.log("O animal está em fase de crescimento e adolescência.");
            } else {
                console.log("O animal ainda é considerado um bezerro.");
            }
    }

    else if (this.especie.trim().toLowerCase() === "cachorro"){
       if (this.idade >= 7) {
        console.log("O cachorro é considerado um idoso")
   }
   else if (this.idade >= 1) {
    console.log("O cachorro é considerado adulto")
   }

   else if (this.idade < 1){
    console.log("O cachorro esta em fase juvenil")
   }
}

    else if (this.especie.trim().toLowerCase() === "galinha"){
       if (this.idade >= 3) {
        console.log("A galinha é considerado um idoso")
   }
   else if (this.idade >= 1) {
    console.log("A galinha é considerado adulto")
   }

   else if (this.idade < 1){
    console.log("A galinha esta em fase juvenil")
   }


}
   }

   public alimentar(quantidadeComida: number): void {

    this.peso += quantidadeComida;
    console.log(`O animal comeu ${quantidadeComida} KG de comida e agora esta com ${this.peso} KG de peso` )

   }
}
