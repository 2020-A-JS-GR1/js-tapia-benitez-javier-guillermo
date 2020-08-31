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
      minLength: 14,
      maxLength: 16,
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
    },
    // RELACIONES
    // Tarjeta <- Usuario
    id_usuario: {
      model: 'Usuario',
      required: true,
    },
    // Tarjeta -> Donacion
    donaciones: {
      collection: 'Donacion',
      via: 'id_tarjeta',
    }
  },

};

