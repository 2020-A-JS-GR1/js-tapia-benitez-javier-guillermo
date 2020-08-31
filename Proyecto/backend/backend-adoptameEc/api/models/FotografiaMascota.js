/**
 * FotografiaMascota.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'adoptameEcDatabase',
  tableName: 'fotografia_mascota',
  attributes: {
    // RELACIONES
    // FotografiaMascota <- Fotografia
    id_fotografia: {
      model: 'Fotografia',
      required: true,
    },
    // FotografiaMascota <- Mascota
    id_mascota: {
      model: 'Mascota',
      required: true,
    }
  },

};

