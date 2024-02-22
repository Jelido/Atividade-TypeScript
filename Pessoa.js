"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, dataNascimento, apartamento, telefone, celular, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.apartamento = apartamento;
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Pessoa.prototype.getDataNascimento = function () {
        return this.dataNascimento;
    };
    Pessoa.prototype.setDataNascimento = function (dataNascimento) {
        this.dataNascimento = dataNascimento;
    };
    Pessoa.prototype.getApartamento = function () {
        return this.apartamento;
    };
    Pessoa.prototype.setApartamento = function (apartamento) {
        this.apartamento = apartamento;
    };
    Pessoa.prototype.getTelefone = function () {
        return this.telefone;
    };
    Pessoa.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Pessoa.prototype.getCelular = function () {
        return this.celular;
    };
    Pessoa.prototype.setCelular = function (celular) {
        this.celular = celular;
    };
    Pessoa.prototype.getEmail = function () {
        return this.email;
    };
    Pessoa.prototype.setEmail = function (email) {
        this.email = email;
    };
    return Pessoa;
}());
exports.default = Pessoa;
