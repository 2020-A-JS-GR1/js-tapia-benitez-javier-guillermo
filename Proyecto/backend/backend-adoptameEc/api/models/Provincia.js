/**
 * Provincia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'provincia',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_provincia',
      minLength: 3,
    },
    // RELACIONES
    // Provincia -> Usuario
    usuarios: {
      collection: 'Usuario',
      via: 'id_provincia',
    },
    // Provincia -> Refugio
    refugios: {
      collection: 'Refugio',
      via: 'id_provincia',
    }
  },

};

