/**
 * Refugio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'refugio',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_refugio',
      minLength: 3,
    },
    direccion: {
      type: 'string',
      required: true,
      columnName: 'direccion_refugio',
      minLength: 3,
    },
    // RELACIONES
    // Refugio <- Provincia
    id_provincia: {
      model: 'Provincia',
      required: true,
    },
    // Refugio -> RefugioMascota
    mascotas: {
      collection: 'RefugioMascota',
      via: 'id_refugio',
    }
  },

};

