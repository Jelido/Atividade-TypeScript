"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_js_1 = require("./Pessoa.js");
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, cpf, dataNascimento, apartamento, telefone, celular, email, cargo, salario) {
        var _this = _super.call(this, nome, cpf, dataNascimento, apartamento, telefone, celular, email) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        return _this;
    }
    Funcionario.prototype.getCargo = function () {
        return this.cargo;
    };
    Funcionario.prototype.setCargo = function (cargo) {
        this.cargo = cargo;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    return Funcionario;
}(Pessoa_js_1.default));
exports.default = Funcionario;
