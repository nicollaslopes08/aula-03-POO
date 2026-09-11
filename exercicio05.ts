export class Cliente{
    private nome: string;
    private id: number;
    private telefone: string
    private cpf: string
    private rg: string;

     constructor(nome: string = "", id: number = 0, telefone: string = "", cpf: string = "", rg: string = ""){
        this.nome = nome;
        this.id = id;
        this.telefone = telefone;
        this.cpf = cpf;
        this.rg = rg;
        
     }

      setNome(nome: string): void {
        this.nome = nome;
    }

    getNome (): string{
        return this.nome
    }

     setId(id: number): void {
        this.id = id;
    }

    getId (): number{
        return this.id;
    }

     setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    getTelefone (): string{
        return this.telefone
    }

     setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    getCpf (): string{
        return this.cpf
    }

     setRg(rg: string): void {
        this.rg = rg;
    }

    getRg (): string{
        return this.rg
    }

    public exibirFicha(): void{
        console.log(`Nome: ${this.nome}`);
        console.log(`Id: ${this.id}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`RG: ${this.rg}`);
    }

    public confeirCPF(): void{
        if (this.cpf.length != 11) {
            console.log(`O CPf de ${this.nome} é invalido, o numeros de digitos não corresponde.`)
        }
        else{
            console.log(`O CPF de ${this.nome} valido.`)
        }
    }

    public enviarSMS(): void {
        console.log(`[SMS enviado para ${this.telefone}]: Olá ${this.nome}, agradecemos por ser nosso cliente,
fique ligado para receber mais notificaçãoes.`)
    }

    public confeirRG(): void{
        if (this.rg.length == 8 || this.rg.length == 9) {
            console.log(`O RG de ${this.nome} é valido.`)
        }
        else{
            console.log(`O RG de ${this.nome} invalido, o numero de digitos não corresponde.`)
        }
    }
}
