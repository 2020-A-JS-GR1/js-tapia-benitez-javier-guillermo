/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // datastore: 'default', // nombre conexion
  // tableName: 'pokemon', // nombre tabla
  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    // Relaciones
    // Pokemon <- Usuario
    usuario: { // Nombre FK
      model: 'Usuario', // modelo con el cual relacionamos
      required: true, // Requerida 1 - N
              //false // Opcional 0 - N (por defecto)
    },
    // Pokemon -> Batalla
    batallas: {
      collection: 'Batalla',
      via: 'pokemon'
    }
  },

};

