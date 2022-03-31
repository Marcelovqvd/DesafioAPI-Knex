
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {  return knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.text('email').unique()
  table.text('password')

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) { return knex.schema.dropTable('users')}