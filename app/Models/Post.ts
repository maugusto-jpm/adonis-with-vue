import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from './User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'user_id' })
  public userId: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public modified: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
