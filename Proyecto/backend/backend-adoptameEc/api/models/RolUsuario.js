/**
 * RolUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'adoptameEcDatabase',
  tableName: 'rol_usuario',
  attributes: {
    // RELACIONES
    // RolUsuario <- Rol
    id_rol: {
      model: 'Rol',
      required: true,
    },
    // RolUsuario <- Usuario
    id_usuario: {
      model: 'Usuario',
      required: true,
    }
  },

};

