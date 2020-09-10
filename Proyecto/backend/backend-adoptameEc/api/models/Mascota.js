/**
 * Mascota.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'adoptameEcDatabase',
  tableName: 'mascota',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_mascota',
      minLength: 3,
    },
    descripcion: {
      type: 'string',
      required: true,
      columnName: 'descripcion_mascota',
      minLength: 3,
    },
    edad:{
      type: 'string',
      columnName: 'edad_mascota',
      isIn: ['Cachorro', 'Joven', 'Adulto', 'Viejo'],
      defaultsTo: 'Joven',
    },
    genero:{
      type: 'string',
      columnName: 'genero_mascota',
      isIn: ['Macho', 'Hembra'],
      defaultsTo: 'Macho',
    },
    tamano:{
      type: 'string',
      columnName: 'tamano_mascota',
      isIn: ['Pequeña', 'Mediana', 'Grande'],
      defaultsTo: 'Mediana',
    },
    pelaje:{
      type: 'string',
      columnName: 'pelaje_mascota',
      isIn: ['Sin pelaje', 'Corto', 'Largo'],
      defaultsTo: 'Corto',
    },
    vacuna:{
      type: 'string',
      columnName: 'vacuna_mascota',
      isIn: ['Si', 'No'],
      defaultsTo: 'No',
    },
    esterilizacion:{
      type: 'string',
      columnName: 'estirilizacion_mascota',
      isIn: ['Si', 'No'],
      defaultsTo: 'No',
    },
    // RELACIONES
    // Mascota -> Adopcion
    adopciones: {
      collection: 'Adopcion',
      via: 'id_mascota',
    },
    // Mascota -> Donacion
    donaciones: {
      collection: 'Donacion',
      via: 'id_mascota',
    },
    // Mascota -> RefugioMascota
    refugios: {
      collection: 'RefugioMascota',
      via: 'id_mascota',
    },
    // Mascota -> FotografiaMascota
    fotografias: {
      collection: 'FotografiaMascota',
      via: 'id_mascota',
    },
    // Mascota <- Raza
    id_raza: {
      model: 'Raza',
      required: true,
    }
  },

};

