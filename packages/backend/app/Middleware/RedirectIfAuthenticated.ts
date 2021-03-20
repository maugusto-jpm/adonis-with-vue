import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RedirectIfAuthenticated {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>): Promise<void> {
    if (ctx.auth.user) {
      ctx.session.flash({ error: 'Você já está autenticado' })

      return ctx.response.redirect('/postagens')
    }

    await next()
  }
}
