/**
 * Donacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'donacion',
  attributes: {
    valor: {
      type: 'number',
      required: true,
      columnName: 'valor_donacion',
      min: 5,
      max: 100,
    },
    fecha: {
      type: 'number',
      required: true,
      columnName: 'fecha_donacion',
    },
    // RELACIONES
    // Donacion <- Tarjeta
    id_tarjeta: {
      model: 'Tarjeta',
      required: true,
    },
    // Donacion <- Mascota
    id_mascota: {
      model: 'Mascota',
      required: true,
    }
  },

};

