export default class Cargo {
    private descricao: string
    private cargaHoraria: number

    constructor(descricao: string, cargaHoraria: number) {
        this.descricao = descricao
        this.cargaHoraria = cargaHoraria
    }

    public getDescricao(): string {
        return this.descricao
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao
    }

    public getCargaHoraria(): number {
        return this.cargaHoraria
    }

    public setCargaHoraria(cargaHoraria: number): void {
        this.cargaHoraria = cargaHoraria
    }
}