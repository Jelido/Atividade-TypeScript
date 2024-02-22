"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario_js_1 = require("./Funcionario.js");
var Apartamento_js_1 = require("./Apartamento.js");
var Morador_js_1 = require("./Morador.js");
var Cargo_js_1 = require("./Cargo.js");
var cargoZelador = new Cargo_js_1.default("Zelador", 40);
var funcionario1 = new Funcionario_js_1.default("João", "123.456.789-00", new Date(1990, 5, 15), new Apartamento_js_1.default("C", 303, "Fulano de Tal"), "123456789", "987654321", "j@j.com", cargoZelador, 3000);
var funcionario2 = new Funcionario_js_1.default("Maria", "987.654.321-00", new Date(1985, 3, 20), new Apartamento_js_1.default("D", 404, "Ciclano de Tal"), "987654321", "123456789", "ma@m.com", cargoZelador, 3200);
var apartamento1 = new Apartamento_js_1.default("A", 101, "Fulano de Tal");
var apartamento2 = new Apartamento_js_1.default("B", 202, "Ciclano de Tal");
var morador1 = new Morador_js_1.default("Carlos", "111.222.333-44", new Date(1988, 10, 25), apartamento1, "333333333", "999999999", "c@c.com");
var morador2 = new Morador_js_1.default("Ana", "555.666.777-88", new Date(2009, 7, 12), apartamento1, "444444444", "888888888", "a@a.com");
var morador3 = new Morador_js_1.default("Paulo", "999.888.777-66", new Date(2005, 2, 8), apartamento2, "555555555", "777777777", "p@p.com");
var morador4 = new Morador_js_1.default("Joao", "999.888.777-66", new Date(2008, 2, 8), apartamento2, "66666666", "999999999", "j@j.com");
apartamento1.adicionarMorador(morador1);
apartamento1.adicionarMorador(morador2);
apartamento2.adicionarMorador(morador3);
apartamento2.adicionarMorador(morador4);
var moradoresMenoresIdadeApartamento1 = apartamento1.getMoradoresMenoresIdade();
var moradoresMenoresIdadeApartamento2 = apartamento2.getMoradoresMenoresIdade();
console.log("Moradores menores de idade do apartamento 1:");
moradoresMenoresIdadeApartamento1.forEach(function (morador) {
    console.log("".concat(morador.getNome(), " - ").concat(morador.getDataNascimento()));
});
console.log("Moradores menores de idade do apartamento 2:");
moradoresMenoresIdadeApartamento2.forEach(function (morador) {
    console.log("".concat(morador.getNome(), " - ").concat(morador.getDataNascimento()));
});
var listaSalariosZelador = [funcionario1, funcionario2]
    .filter(function (funcionario) { return funcionario.getCargo().getDescricao() === "Zelador"; })
    .map(function (funcionario) { return funcionario.getSalario(); });
console.log("Sal\u00E1rios dos funcion\u00E1rios que atuam como zelador: ");
console.log(listaSalariosZelador);
