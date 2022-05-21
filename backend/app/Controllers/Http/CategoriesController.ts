import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class CategoriesController {

  public async index({ response, auth }: HttpContextContract) {

    const userId = auth.use('api').user!.id

    const categories = await Category.query().where('user_id', userId)

    return response.json(categories)

  }

  public async show({ request, response, params, auth }: HttpContextContract) {

    const userId = auth.use('api').user!.id

    const category = await Category.query().where('user_id', userId).where('id', params.id)

    if (JSON.stringify(category) == '[]') {
      return response.json({ message: 'Category not found ' })
    }

    return response.json(category)

  }

  public async store({ request, response, auth }: HttpContextContract) {

    const { name } = request.body()

    const categoryAlreadyExists = await Category.findBy('name', name)

    if (categoryAlreadyExists) {
      return response.json({ message: 'Category already exists.' })
    }

    const userId = auth.use('api').user?.id

    const category = await Category.create({ user_id: userId, name })

    return response.json({ message: "Category created successfully!", category })

  }

  public async update({ request, response, auth, params }: HttpContextContract) {

    const CategorySchema = schema.create({
      name: schema.string({}, [rules.minLength(1)]),
    })

    const payload = await request.validate({ schema: CategorySchema })

    const userId = auth.use('api').user!.id

    const category = await Category.query().where('user_id', userId).where('id', params.id)

    if (JSON.stringify(category) == '[]') {
      return response.json({ message: 'Category not found' })
    }

    await Category.query().update(payload).where('id', params.id)

    return response.json({ message: "Category updated successfully!" })
  }

  public async delete({ request, response, auth, params} : HttpContextContract){
    const userId = auth.use('api').user!.id

    const category = await Category.query().where('user_id', userId).where('id', params.id)

    if (JSON.stringify(category) == '[]') {
      return response.json({ message: 'Category not found' })
    }

    await Category.query().delete().where('id', params.id)

    return response.json({ message: "Category deleted successfully!" })
  }
}
