import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import SignupValidator from 'App/Validators/SignupValidator'

export default class SessionController {
  public async login({ request, response, auth }: HttpContextContract): Promise<void> {
    console.log('Login');

    const userDetails = await request.validate(LoginValidator)
    const user = await auth.attempt(userDetails.email, userDetails.password)

    console.log(user);

    response.status(200).send({ user })
  }

  public async signup({ request, auth, response }: HttpContextContract): Promise<void> {
    const userDetails = await request.validate(SignupValidator)

    const user = new User()
    user.email = userDetails.email
    await user.setPassword(userDetails.password)
    await user.save()

    await auth.login(user)

    return response.status(200).send({ user })
  }

  public async logout({ response, auth }: HttpContextContract): Promise<void> {
    await auth.logout()

    response.redirect('/')
  }
}
