/**
 * Tarjeta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'adoptameEcDatabase',
  tableName: 'tarjeta',
  attributes: {
    numero: {
      type: 'string',
      required: true,
      columnName: 'numero_tarjeta',
      unique: true,
      minLength: 16,
      maxLength: 19,
      isCreditCard: true,
    },
    fechaCaducidad: {
      type: 'string',
      required: true,
      columnName: 'fecha_caducidad_tarjeta',
      maxLength: 5,
    },
    cvv: {
      type: 'string',
      required: true,
      columnName: 'cvv_tarjeta',
      minLength: 3,
      maxLength: 4,
    }
  },

};

