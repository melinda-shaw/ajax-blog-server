const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);


// // SELECT
// knex('houses').select('last_name', 'id').then(result => {
//   console.log(result);
// });




module.exports = knex
