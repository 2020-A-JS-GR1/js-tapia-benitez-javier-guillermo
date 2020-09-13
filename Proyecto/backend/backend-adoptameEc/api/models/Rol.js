/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'adoptameEcDatabase',
  // tableName: 'rol',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      columnName: 'nombre_rol',
      unique: true,
    },
    // RELACIONES
    // Rol -> RolUsuario 
    usuarios: {
      collection: 'RolUsuario',
      via: 'id_rol',
    }
  },

};

