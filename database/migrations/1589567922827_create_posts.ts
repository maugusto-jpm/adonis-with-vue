import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreatePosts extends BaseSchema {
  protected tableName = 'posts'

  public async up(): Promise<void> {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.boolean('user_id').notNullable().references('id').inTable('user')
      table.string('title', 70).notNullable()
      table.string('content', 1050).notNullable()
      table.boolean('modified').defaultTo(false).notNullable()
      table.timestamps(true)
    })
  }

  public async down(): Promise<void> {
    this.schema.dropTable(this.tableName)
  }
}

