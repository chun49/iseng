'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlogSchema extends Schema {
  up () {
    this.create('blogs', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('title')
      table.string('slug')
      table.text('body')
      table.timestamps()
    })
  }

  down () {
    this.drop('blogs')
  }
}

module.exports = BlogSchema
