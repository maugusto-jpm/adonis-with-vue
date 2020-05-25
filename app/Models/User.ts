import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  private _password: string

  public get password(): string {
    return this._password
  }

  @column({ columnName: 'remember_me_token', serializeAs: null })
  public rememberMeToken: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  public async setPassword(password: string): Promise<void> {
    this._password = await Hash.make(password)
  }

  public async verifyPassword(password: string): Promise<boolean> {
    return Hash.verify(this._password, password);
  }
}
