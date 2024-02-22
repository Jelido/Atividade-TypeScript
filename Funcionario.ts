import Pessoa from "./Pessoa.js"
import Apartamento from "./Apartamento.js"
import Cargo from "./Cargo.js"

export default class Funcionario extends Pessoa {
    private cargo: Cargo
    private salario: number

    constructor(nome: string, cpf: string, dataNascimento: Date, apartamento: Apartamento, telefone: string, celular: string, email: string, cargo: Cargo, salario: number) {
        super(nome, cpf, dataNascimento, apartamento, telefone, celular, email)
        this.cargo = cargo
        this.salario = salario
    }

    public getCargo(): Cargo {
        return this.cargo
    }

    public setCargo(cargo: Cargo): void {
        this.cargo = cargo
    }

    public getSalario(): number {
        return this.salario
    }

    public setSalario(salario: number): void {
        this.salario = salario
    }
}