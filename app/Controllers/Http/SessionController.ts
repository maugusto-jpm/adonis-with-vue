import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LoginValidator from 'App/Validators/LoginValidator'

export default class SessionController {
  public async login({ request, response, auth, session }: HttpContextContract): Promise<void> {
    const userDetails = await request.validate(LoginValidator)
    const rememberMe = !!request.input('remember_me') as boolean

    await auth.attempt(userDetails.email, userDetails.password, rememberMe)

    session.flash({ info: `Você fez login como ${userDetails.email}` })
    const { redirectTo } = request.get()

    response.redirect(redirectTo || '/postagens')
  }

  public async logout({ response, auth, session }: HttpContextContract): Promise<void> {
    await auth.logout()

    session.flash({ info: 'Sua sessão foi encerrada' })
    response.redirect('/postagens')
  }
}
