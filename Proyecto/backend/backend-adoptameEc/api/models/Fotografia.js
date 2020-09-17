/**
 * Fotografia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'fotografia',
  attributes: {
    url: {
      type: 'string',
      required: true,
      columnName: 'url_fotografia',
      isURL: true,
    },
    // RELACIONES
    // Fotografia -> FotografiaMascota
    id_mascota: {
      model: 'Mascota',
      required: true,
    }
  },

};

