/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_profile', function (table) {
        table.increments('user_id').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('department');
        table.string('designation');
        table.integer('tenant_id').unsigned().references('tenant_profile.id');
        table.string('image_url');
        table.string('city').notNullable();
        table.string('country').notNullable();
        table.string('bio').notNullable();
        table.json('social_links').notNullable();
        table.integer('employee_id');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_profile');
};
