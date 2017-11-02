exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      // Inserts seed entries
      return knex('posts').insert([{
        id: 1,
        title: 'hello',
        content: 'something here'
      }])
    }).then(() => {
      return knex.raw(`SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`)
    })
};
