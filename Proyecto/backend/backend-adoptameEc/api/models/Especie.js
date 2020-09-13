/**
 * Especie.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'especie',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_especie',
      minLength: 3,
    },
    // RELACIONES
    // Especie -> Raza
    razas: {
      collection: 'Raza',
      via: 'id_especie',
    }
  },

};

