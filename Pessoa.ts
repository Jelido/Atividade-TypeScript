import Apartamento from './Apartamento.js'

export default class Pessoa {
    private nome: string
    private cpf: string
    private dataNascimento: Date
    private apartamento: Apartamento
    private telefone: string
    private celular: string
    private email: string

    constructor(nome: string, cpf: string, dataNascimento: Date, apartamento: Apartamento, telefone: string, celular: string, email: string) {
        this.nome = nome
        this.cpf = cpf
        this.dataNascimento = dataNascimento
        this.apartamento = apartamento
        this.telefone = telefone
        this.celular = celular
        this.email = email
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getCpf(): string {
        return this.cpf
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf
    }

    public getDataNascimento(): Date {
        return this.dataNascimento
    }

    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento
    }

    public getApartamento(): Apartamento {
        return this.apartamento
    }

    public setApartamento(apartamento: Apartamento): void {
        this.apartamento = apartamento
    }

    public getTelefone(): string {
        return this.telefone
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone
    }

    public getCelular(): string {
        return this.celular
    }

    public setCelular(celular: string): void {
        this.celular = celular
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(email: string): void {
        this.email = email
    }
}
