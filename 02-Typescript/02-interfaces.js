var _this = this;
var adrian = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        if (_this.sueldo) {
            return 0;
        }
        else {
            return _this.sueldo + _this.sueldo * impuesto;
        }
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case "BN":
                return 'AT';
        }
    }
};
// adrian.imprimirUsuario(1,2,3,4);
