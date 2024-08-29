exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).notnullable().unique()

    tbl.string('make', 128).notnullable()

    tbl.string('model', 128).notnullable()

    tbl.numeric('mileage').unsigned().notnullable()

    tbl.string('title', 128)

    tbl.string('transmission', 128)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
