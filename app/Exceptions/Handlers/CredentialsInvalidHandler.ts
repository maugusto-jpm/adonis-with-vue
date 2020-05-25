import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default async (_error: any, ctx: HttpContextContract): Promise<void> => {
  ctx.session.flash({ error: 'O usuário ou a senha estão incorretos' })

  return ctx.response.redirect('back')
}
