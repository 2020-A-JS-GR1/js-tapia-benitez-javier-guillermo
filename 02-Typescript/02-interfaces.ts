interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;
    // calcularImpuesto parametro numero impuesto -> sueldo + sueldo * impuesto
    calcularImpuesto: (impuesto: number) => number;
    // estadoActual no reciba parametros, 'AP' 'AF' 'AT'
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

const adrian: Usuario = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto) => {
        if (this.sueldo) {
            return 0;
        } else {
            return this.sueldo + this.sueldo * impuesto;
        }
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case "BN":
                return 'AT';
        }
    },
};

// adrian.imprimirUsuario(1,2,3,4);
