import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ auth, response }: HttpContextContract): Promise<void> {
    const user = auth.user

    response.json(user)
  }
}
