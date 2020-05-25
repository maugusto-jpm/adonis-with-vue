import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import url from 'url'

export default async (_error: any, ctx: HttpContextContract): Promise<void> => {
  ctx.session.flash({ info: 'Para prosseguir é necessário se autenticar' })

  const redirectUrl = url.format({
    host: '/entrar',
    query: {
      redirectTo: ctx.request.url(true),
    }
  });

  return ctx.response.redirect(redirectUrl)
}
