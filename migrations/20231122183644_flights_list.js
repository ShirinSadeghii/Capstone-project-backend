/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("flights_list", function (table) {
    table.increments("id"); // pk, auto increment
    table.string("current_city");
    table.string("destination_city");
    table.string("time");
    table.string("date");
    table.string("airline");
    table.string("price");
    table.string("iata");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("flights_list");
};
