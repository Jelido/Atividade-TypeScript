export default class Morador{
    private nome: string
    private cpf: string
    nascimento: number
    endereco: number
    telefone: number
    celular: number
    email: string
    apartamento: string

    constructor(nome: string, cpf: string, nascimento: number, endereco: number, telefone: number,celular: number, email: string, apartamento: string){
        this.nome = nome
        this.cpf = cpf
        this.nascimento = nascimento
        this.endereco = endereco
        this.telefone = telefone
        this.celular = celular
        this.email = email
        this.apartamento = apartamento
    }

    getNome(): string{
        return this.nome
    }

    getCpf(): string{
        return this.cpf
    }
    
    getNascimento(): number{
        return this.nascimento
    }

    getTelefone(): number{
        return this.telefone
    }
    
    getCelular(): number{
        return this.celular
    }

    getEmail(): string{
        return this.email
    }
}