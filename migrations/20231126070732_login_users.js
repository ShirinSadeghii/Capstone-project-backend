/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("login_users", function (table) {
      table.increments("id"); // pk, auto increment
      table.string("username");
      table.string("name");
      table.string("password");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("login_users");
  };
  
