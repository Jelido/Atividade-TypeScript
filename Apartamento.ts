import Morador from "./Morador.js"

export default class Apartamento {
    private bloco: string
    private numero: number
    private nomeProprietario: string
    private moradores: Morador[]

    constructor(bloco: string, numero: number, nomeProprietario: string) {
        this.bloco = bloco
        this.numero = numero
        this.nomeProprietario = nomeProprietario
        this.moradores = []
    }

    public getBloco(): string {
        return this.bloco
    }

    public setBloco(bloco: string): void {
        this.bloco = bloco
    }

    public getNumero(): number {
        return this.numero
    }

    public setNumero(numero: number): void {
        this.numero = numero
    }

    public getNomeProprietario(): string {
        return this.nomeProprietario
    }

    public setNomeProprietario(nomeProprietario: string): void {
        this.nomeProprietario = nomeProprietario
    }

    public getMoradores(): Morador[] {
        return this.moradores
    }

    public setMoradores(moradores: Morador[]): void {
        this.moradores = moradores
    }

    public adicionarMorador(morador: Morador): void {
        this.moradores.push(morador)
    }

    public getMoradoresMenoresIdade(): Morador[] {
        const dataAtual = new Date()
        return this.moradores.filter(morador => {
            const idade = dataAtual.getFullYear() - morador.getDataNascimento().getFullYear()
            console.log(`Idade de ${morador.getNome()}: ${idade}`)
            return idade < 18
        });
    }
}