/**
 * Batalla.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default', // nombre conexion
  tableName: 'batalla', // nombre tabla
  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    // Relaciones
    // Batalla <- Pokemon
    pokemon: {
      model: 'Pokemon',
      required: true,
    }
  },

};

