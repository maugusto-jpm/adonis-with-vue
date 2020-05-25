import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsers extends BaseSchema {
  protected tableName = 'users'

  public async up(): Promise<void> {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 250).notNullable()
      table.string('email', 150).unique().notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true)
    })
  }

  public async down(): Promise<void> {
    this.schema.dropTable(this.tableName)
  }
}
