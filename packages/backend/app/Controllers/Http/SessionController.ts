import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LoginValidator from 'App/Validators/LoginValidator'

export default class SessionController {
  public async login({ request, response, auth }: HttpContextContract): Promise<void> {
    const userDetails = await request.validate(LoginValidator)
    await auth.attempt(userDetails.email, userDetails.password)

    response.status(200)
  }

  public async logout({ response, auth }: HttpContextContract): Promise<void> {
    await auth.logout()

    response.redirect('/')
  }
}
