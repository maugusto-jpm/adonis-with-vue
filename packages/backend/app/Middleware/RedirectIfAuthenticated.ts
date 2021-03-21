import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RedirectIfAuthenticated {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>): Promise<void> {
    if (!!ctx.auth.user)
      return ctx.response.status(200).send(ctx.auth.user)

    await next()
  }
}
