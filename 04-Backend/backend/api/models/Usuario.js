/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'default', // nombre conexion
  // tableName: 'epn_usuario', // nombre tabla
  attributes: {
    cedula:{
      type: 'string',
      required: true,
      columnName: 'epn_cedula',
      unique: true,
      minLength: 10,
      maxLength: 25
    },
    nombre:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    correo:{
      type: 'string',
      isEmail: true // Por defecto es false
    },
    estadoCivil:{
      type: 'string',
      isIn: ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre'], // Solo estos valores
      defaultsTo: 'Soltero' // Valor por defecto
    },
    // Relaciones
    // Usuario -> Pokemon
    pokemones: { // Uno a muchos (nombre en plural)
      collection: 'Pokemon', // Modelo a relacionarse
      via: 'usuario' // Nombre atributo FK en el modelo relacionada
    }
  },

};

