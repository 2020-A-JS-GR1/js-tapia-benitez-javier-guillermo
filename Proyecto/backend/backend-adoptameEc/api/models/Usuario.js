/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'adoptameEcDatabase',
  tableName: 'usuario',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_usuario',
      minLength: 3,
    },
    apellido: {
      type: 'string',
      required: true,
      columnName: 'apellido_usuario',
      minLength: 3,
    },
    email: {
      type: 'string',
      required: true,
      columnName: 'email_usuario',
      isEmail: true,
    },
    contrasena: {
      type: 'string',
      required: true,
      columnName: 'contrasena_usuario',
      custom: function(value) {
        return _.isString(value) && value.length >= 8 && value.match(/[a-z]/i) && value.match(/[0-9]/);
      },
    },
    perros: {
      type: 'number',
      defaultsTo: 0,
      columnName: 'num_perros_usuario',
    },
    gatos: {
      type: 'number',
      defaultsTo: 0,
      columnName: 'num_gatos_usuario',
    },
    mascotas: {
      type: 'number',
      defaultsTo: 0,
      columnName: 'num_mascotas_usuario',
    }
  },

};
