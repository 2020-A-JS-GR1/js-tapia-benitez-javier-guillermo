/**
 * Raza.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'raza',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_raza',
      minLength: 3,
    },
    descripcion: {
      type: 'string',
      required: true,
      columnName: 'descripcion_raza',
      minLength: 3,
    },
    // RELACIONES
    // Raza <- Especie
    id_especie: {
      model: 'Especie',
      required: true,
    },
    // Raza -> Mascota
    mascotas: {
      collection: 'Mascota',
      via: 'id_raza',
    }
  },

};

