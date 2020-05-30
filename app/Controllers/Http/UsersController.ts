import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import SignupValidator from 'App/Validators/SignupValidator'

export default class UsersController {
  public async index({ auth, response }: HttpContextContract): Promise<void> {
    const user = auth.user

    response.json(user)
  }

  public async signup({ request, auth, response }: HttpContextContract): Promise<void> {
    const userDetails = await request.validate(SignupValidator)

    const user = new User()
    user.email = userDetails.email
    await user.setPassword(userDetails.password)
    await user.save()

    await auth.login(user)

    response.status(200)
  }
}
