
exports.up = async function(knex) {
  await knex.schema.createTable('admin', table => {
    table.bigIncrements('id');
    table.text('username').notNullable();
    table.text('password').notNullable();
    table.text('fullname').notNullable();
  });
  await knex.schema.createTable('student', table => {
    table.bigIncrements('id');
    table.text('studentcode').notNullable();
    table.text('fullname').notNullable();
    table.text('datebirth');
    table.text('gender');
    table.text('hometown');
    table.text('class');
    table.text('password').notNullable();
  });
  await knex.schema.createTable('exam', table => {
    table.bigIncrements('id');
    table.text('examname').notNullable();
    table.text('examyear').notNullable();
    table.text('semester').notNullable();
    table.text('note').notNullable();
    table.bigInteger('status').notNullable();
  });
  await knex.schema.createTable('subject', table => {
    table.bigIncrements('id');
    table.bigInteger('examid').references('id').inTable('exam').notNullable().onDelete('CASCADE');
    table.text('subjecname').notNullable();
    table.text('subjectcode').notNullable();
  });
  await knex.schema.createTable('listsubject', table => {
    table.bigIncrements('id');
    table.bigInteger('subjectid').references('id').inTable('subject').notNullable().onDelete('CASCADE');
    table.bigInteger('studentid').references('id').inTable('student').notNullable().onDelete('CASCADE');
    table.text('status').notNullable();
    table.bigInteger('examid').references('id').inTable('exam').notNullable().onDelete('CASCADE');;
  });
  await knex.schema.createTable('classes', table => {
    table.bigIncrements('id');
    table.bigInteger('subjectid').references('id').inTable('subject').notNullable().onDelete('CASCADE');
    table.text('date').notNullable();
    table.text('room').notNullable();
    table.text('start').notNullable();
    table.text('end').notNullable();
    table.bigInteger('amount').notNullable();
    table.bigInteger('typeclasses').notNullable();
    table.bigInteger('studentregis').notNullable();
    table.bigInteger('examid').references('id').inTable('exam').notNullable().onDelete('CASCADE');;
  });
  await knex.schema.createTable('result', table => {
    table.bigIncrements('id');
    // table.text('subjectcode').notNullable();
    // table.text('studentcode').notNullable();
    table.bigInteger('subjectid').references('id').inTable('subject').notNullable().onDelete('CASCADE');;
    table.bigInteger('studentid').references('id').inTable('student').notNullable().onDelete('CASCADE');
    table.bigInteger('classesid').references('id').inTable('classes').notNullable().onDelete('CASCADE');
    table.bigInteger('examid').references('id').inTable('exam').notNullable().onDelete('CASCADE');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('result');
  await knex.schema.dropTableIfExists('classes');
  await knex.schema.dropTableIfExists('listsubject');
  await knex.schema.dropTableIfExists('subject');
  await knex.schema.dropTableIfExists('exam');
  await knex.schema.dropTableIfExists('student');
  await knex.schema.dropTableIfExists('admin');
};
