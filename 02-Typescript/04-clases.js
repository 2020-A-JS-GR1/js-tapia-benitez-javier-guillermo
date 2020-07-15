var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParametro, apellidoParametro) {
        this.nombreYApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    Persona.prototype.mostrarNombreApellido = function () {
        return this.nombreYApellido;
    };
    Persona.nombreReferencial = 'Humano';
    return Persona;
}());
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        var _this = _super.call(this, nombreParametro, apellidoParametro) || this;
        _this.cedula = cedula;
        _this.estadoCivil = estadoCivil;
        return _this;
    }
    return Usuario;
}(Persona));
var adrian = new Usuario('Adrian', 'Eguez', '1724222078', 'soltero');
console.log(adrian.nombre);
console.log(adrian.apellido);
console.log(adrian.cedula);
console.log(adrian.estadoCivil);
