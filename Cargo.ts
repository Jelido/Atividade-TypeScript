export default class Cargo{
    private descricao: string
    private horarioDeTrabalho: number

    constructor(descricao: string, horarioDeTrabalho: number){
        this.descricao = descricao
        this.horarioDeTrabalho = horarioDeTrabalho
    }

    getDescricao(): string {
        return this.descricao
    }

    getHorarioDeTrabalho(): number {
        return this.horarioDeTrabalho
    }
}