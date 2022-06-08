import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'
import Transaction from 'App/Models/Transaction'

export default class TransactionsController {
  public async index({ auth }: HttpContextContract) {

    const userId = auth.use("api").user!.id

    const transactions = await Transaction.query().where('user_id', userId)

    return transactions

  }

  public async store({ request, response, auth }: HttpContextContract) {
    const userId = auth.use('api').user?.id
    console.log('userId:', userId)
    
    const TransactionSchema = schema.create({
      name: schema.string({}, [rules.minLength(1)]),
      type: schema.string(),
      date: schema.date(),
      value: schema.number(),
      category: schema.string()
    })

    const payload = await request.validate({ schema: TransactionSchema })

    //const categoryExists = await Category.findBy('name', payload.category)

    //if(!categoryExists){
    //  return response.json({message: 'Category does not exists.'})
    //}
    


    const transaction = await Transaction.create({ user_id: userId, ...payload })

    return response.json({ message: "Transaction created successfully!", transaction })
  }

  public async show({ auth, params }: HttpContextContract) {

    const userId = auth.use("api").user!.id

    const transactions = await Transaction.query().where('id', params.id).where('user_id', userId)

    return transactions

  }

  public async update({ request, response, auth, params }: HttpContextContract) {
    const TransactionSchema = schema.create({
      name: schema.string({}, [rules.minLength(1)]),
      type: schema.string(),
      date: schema.date(),
      value: schema.number(),
    })

    const userId = auth.use('api').user!.id
    const transaction = await Transaction.findByOrFail('id', params.id)

    const payload = await request.validate({ schema: TransactionSchema })

    if (transaction.user_id != userId) {
      return response.json({ message: 'Transaction not found.' })
    }

    await Transaction.query().update(payload).where('id', params.id)

    return response.json({ message: "Transaction updated successfully!" })
  }

  public async delete({ request, response, auth, params }: HttpContextContract) {
    const userId = auth.use('api').user!.id
    const transaction = await Transaction.findByOrFail('id', params.id)

    if (transaction.user_id != userId) {
      return response.json({ message: 'Transaction not found.' })
    }

    await Transaction.query().delete().where('id', params.id)

    return response.json({ message: "Transaction deleted successfully!" })
  }

}
