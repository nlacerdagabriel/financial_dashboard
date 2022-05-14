import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class UsersController {
  public async register({ request, response, auth }: HttpContextContract) {
    const userSchema = schema.create({
      name: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'name', caseInsensitive: true })]),
      email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email', caseInsensitive: true })]),
      password: schema.string({}, [rules.minLength(4)])
    })


    const data = await request.validate({ schema: userSchema })
    const user = await User.create(data)

    const token = await auth.use('api').generate(user)

    return response.json({ user, token })

  }
}
