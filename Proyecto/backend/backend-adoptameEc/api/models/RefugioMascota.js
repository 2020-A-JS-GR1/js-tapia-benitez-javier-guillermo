/**
 * RefugioMascota.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'adoptameEcDatabase',
  tableName: 'refugio_mascota',
  attributes: {
    // RELACIONES
    // RefugioMascota <- Mascota
    id_mascota: {
      model: 'Mascota',
      required: true,
    },
    // RefugioMascota <- Refugio
    id_refugio: {
      model: 'Refugio',
      required: true,
    }
  },

};

