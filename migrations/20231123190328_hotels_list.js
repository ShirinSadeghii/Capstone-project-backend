/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("hotels_list", function (table) {
      table.increments("id"); // pk, auto increment
      table.string("name");
      table.string("city");
      table.string("rating");
      table.string("price");
      table.string("imagePath");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("hotels_list");
  };
  