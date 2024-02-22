import Funcionario from "./Funcionario.js"
import Apartamento from "./Apartamento.js"
import Morador from "./Morador.js"
import Cargo from "./Cargo.js"


const cargoZelador = new Cargo("Zelador", 40)


const funcionario1 = new Funcionario("João", "123.456.789-00", new Date(1990, 5, 15), new Apartamento("C", 303, "Fulano de Tal"), "123456789", "987654321", "joao@example.com", cargoZelador, 3000)
const funcionario2 = new Funcionario("Maria", "987.654.321-00", new Date(1985, 3, 20), new Apartamento("D", 404, "Ciclano de Tal"), "987654321", "123456789", "maria@example.com", cargoZelador, 3200)

const apartamento1 = new Apartamento("A", 101, "Fulano de Tal")
const apartamento2 = new Apartamento("B", 202, "Ciclano de Tal")

const morador1 = new Morador("Carlos", "111.222.333-44", new Date(1988, 10, 25), apartamento1, "333333333", "999999999", "carlos@example.com")
const morador2 = new Morador("Ana", "555.666.777-88", new Date(1995, 7, 12), apartamento1, "444444444", "888888888", "ana@example.com")
const morador3 = new Morador("Paulo", "999.888.777-66", new Date(2005, 2, 8), apartamento2, "555555555", "777777777", "paulo@example.com")

apartamento1.adicionarMorador(morador1)
apartamento1.adicionarMorador(morador2)
apartamento2.adicionarMorador(morador3)

const moradoresMenoresIdadeApartamento1 = apartamento1.getMoradoresMenoresIdade()
const moradoresMenoresIdadeApartamento2 = apartamento2.getMoradoresMenoresIdade()

console.log("Moradores menores de idade do apartamento 1:")
moradoresMenoresIdadeApartamento1.forEach(morador => {
    console.log(`${morador.getNome()} - ${morador.getDataNascimento()}`)
})

console.log("Moradores menores de idade do apartamento 2:")
moradoresMenoresIdadeApartamento2.forEach(morador => {
    console.log(`${morador.getNome()} - ${morador.getDataNascimento()}`)
})


const listaSalariosZelador = [funcionario1, funcionario2]
    .filter(funcionario => funcionario.getCargo().getDescricao() === "Zelador")
    .map(funcionario => funcionario.getSalario())

console.log("Salários dos funcionários que atuam como zelador:")
console.log(listaSalariosZelador)
