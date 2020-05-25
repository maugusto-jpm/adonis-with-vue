import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import SignupValidator from 'App/Validators/SignupValidator'

export default class UsersController {
  public async store({ request, auth, session, response }: HttpContextContract): Promise<void> {
    const userDetails = await request.validate(SignupValidator)
    const rememberMe = !!request.input('remember_me') as boolean

    const user = new User()
    user.email = userDetails.email
    user.name = userDetails.name
    await user.setPassword(userDetails.password)
    await user.save()

    auth.login(user, rememberMe)

    session.flash({ info: `Seja bem-vindo, ${userDetails.name}` })
    response.redirect('/postagens')
  }
}
