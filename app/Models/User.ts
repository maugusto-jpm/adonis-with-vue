import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

import Post from './Post'

export default class User extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column({ columnName: 'remember_me_token', serializeAs: null })
  public rememberMeToken: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>

  public async setPassword(password: string): Promise<void> {
    this.password = await Hash.make(password)
  }

  public async verifyPassword(password: string): Promise<boolean> {
    return Hash.verify(this.password, password);
  }
}
