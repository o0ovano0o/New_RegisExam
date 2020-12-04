exports.up = knex =>
  knex.schema.table('student', table => {
    table.text('email');
  });

exports.down = knex =>
  knex.schema.table('student', table => {
    table.dropColumn('email');
  });
