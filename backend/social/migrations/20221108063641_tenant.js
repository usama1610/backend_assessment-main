/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tenant_profile', function (table) {
        table.increments('tenant_id').notNullable();
        table.string('tenant_name');
        table.json('address');
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('country');
        table.string('zip_code');
        table.string('phone');
        table.string('web_url');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tenant_profile');
};
