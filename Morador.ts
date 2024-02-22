import Pessoa from "./Pessoa.js"
import Apartamento from "./Apartamento.js"


export default class Morador extends Pessoa {
    constructor(nome: string, cpf: string, dataNascimento: Date, apartamento: Apartamento, telefone: string, celular: string, email: string) {
        super(nome, cpf, dataNascimento, apartamento, telefone, celular, email)
    }
}