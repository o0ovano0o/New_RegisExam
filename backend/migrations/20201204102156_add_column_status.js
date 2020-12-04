exports.up = knex =>
  knex.schema.table('result', table => {
    table.integer('status').default(0);
  });

exports.down = knex =>
  knex.schema.table('result', table => {
    table.dropColumn('status');
  });
