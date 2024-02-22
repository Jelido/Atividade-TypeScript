"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Apartamento = /** @class */ (function () {
    function Apartamento(bloco, numero, nomeProprietario) {
        this.bloco = bloco;
        this.numero = numero;
        this.nomeProprietario = nomeProprietario;
        this.moradores = [];
    }
    Apartamento.prototype.getBloco = function () {
        return this.bloco;
    };
    Apartamento.prototype.setBloco = function (bloco) {
        this.bloco = bloco;
    };
    Apartamento.prototype.getNumero = function () {
        return this.numero;
    };
    Apartamento.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Apartamento.prototype.getNomeProprietario = function () {
        return this.nomeProprietario;
    };
    Apartamento.prototype.setNomeProprietario = function (nomeProprietario) {
        this.nomeProprietario = nomeProprietario;
    };
    Apartamento.prototype.getMoradores = function () {
        return this.moradores;
    };
    Apartamento.prototype.setMoradores = function (moradores) {
        this.moradores = moradores;
    };
    Apartamento.prototype.adicionarMorador = function (morador) {
        this.moradores.push(morador);
    };
    Apartamento.prototype.getMoradoresMenoresIdade = function () {
        var dataAtual = new Date();
        return this.moradores.filter(function (morador) {
            var idade = dataAtual.getFullYear() - morador.getDataNascimento().getFullYear();
            console.log("Idade de ".concat(morador.getNome(), ": ").concat(idade));
            return idade < 18;
        });
    };
    return Apartamento;
}());
exports.default = Apartamento;
