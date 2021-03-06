import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Category from './Category'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: string

  @column.dateTime()
  public date: DateTime

  @column()
  public value: number
  
  @column()
  public category: string

  @column()
  public user_id: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

}
