"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cargo = /** @class */ (function () {
    function Cargo(descricao, cargaHoraria) {
        this.descricao = descricao;
        this.cargaHoraria = cargaHoraria;
    }
    Cargo.prototype.getDescricao = function () {
        return this.descricao;
    };
    Cargo.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    Cargo.prototype.getCargaHoraria = function () {
        return this.cargaHoraria;
    };
    Cargo.prototype.setCargaHoraria = function (cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    };
    return Cargo;
}());
exports.default = Cargo;
