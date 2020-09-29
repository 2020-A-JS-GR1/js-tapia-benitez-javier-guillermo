/**
 * Arma.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    rpm: {
      type: 'number',
      required: true,
      min: 0,
    },
    capacidad: {
      type: 'number',
      required: true,
      min: 0,
    },
    imagen: {
      type: 'string',
      required: true,
    },
    // RELACIONES
    // Arma <- Categoria
    categoria: {
      model: 'Categoria',
      required: true,
    }
  },
  datastore: 'default',

};

