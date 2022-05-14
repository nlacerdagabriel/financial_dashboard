import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {

    const userSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email()]),
      password: schema.string()
    })

    const data = await request.validate({ schema: userSchema })

    try {
      const token = await auth.use('api').attempt(data.email, data.password)
      return response.json({ message: "User logged in", token })

    } catch (error) {
      return response.json(error)
    }
  }

  public async logout({ response, auth, }: HttpContextContract) {

    try {
      await auth.use('api').revoke()
      return response.json({ message: "User logged out" })

    } catch (error) {
      return response.json(error)
    }
  }

}
