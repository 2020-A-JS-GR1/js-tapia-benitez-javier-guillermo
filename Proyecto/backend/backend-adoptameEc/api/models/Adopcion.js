/**
 * Adopcion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'adopcion',
  attributes: {
    estado: {
      type: 'string',
      columnName: 'estado_adopcion',
      isIn: ['Pendiente', 'Aprovada', 'Rechazada'],
      defaultsTo: 'Pendiente',
    },
    calificacion: {
      type: 'number',
      required: true,
      columnName: 'calificacion_adopcion',
      min: 0,
      max: 10,
    },
    fecha: {
      type: 'string',
      required: true,
      columnName: 'fecha_adopcion',
    },
    // RELACIONES
    // Adopcion <- Usuario
    id_usuario: {
      model: 'Usuario',
      required: true,
    },
    // Adopcion <- Mascota
    id_mascota: {
      model: 'Mascota',
      required: true,
    }
  },

};

