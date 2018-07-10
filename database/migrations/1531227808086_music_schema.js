'use strict'

const Schema = use('Schema')

class MusicSchema extends Schema {
  up () {
    this.create('music', (table) => {
      table.increments()
      table.string('name')
      table.string('path')
      table.timestamps()
    })
  }

  down () {
    this.drop('music')
  }
}

module.exports = MusicSchema
