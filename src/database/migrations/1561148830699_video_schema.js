'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideoSchema extends Schema {
  up() {
    this.create('videos', (table) => {
      table.increments()
      table.string('name', 25).notNullable().unique()
      table.string('description', 100).nullable()
      table.integer('resolution').nullable()
      table.integer('time').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('videos')
  }
}

module.exports = VideoSchema
