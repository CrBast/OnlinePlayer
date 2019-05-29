'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleSchema extends Schema {
  up() {
    this.create('roles', (table) => {
      table.increments()
      table.string('name', 25).notNullable().unique()
      table.string('details', 80).nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('roles')
  }
}

module.exports = RoleSchema
