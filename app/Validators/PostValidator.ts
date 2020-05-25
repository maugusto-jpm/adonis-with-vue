import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PostValidator {
  constructor (private ctx: HttpContextContract) {}

  /**
   * Defining a schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    title: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(50),
    ]),
    content: schema.string({ trim: true }, [
      rules.minLength(5),
      rules.maxLength(1000),
    ]),
  })

  /**
   * The `schema` first gets compiled to a reusable function and then that compiled
   * function validates the data at runtime.
   *
   * Since, compiling the schema is an expensive operation, you must always cache it by
   * defining a unique cache key. The simplest way is to use the current request route
   * key, which is a combination of the route pattern and HTTP method.
  */
  public cacheKey = this.ctx.routeKey

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
  */
  public messages = {
    'title.required': 'O título do post é necessário',
    'title.minLength': 'O título deve ter no mínimo 3 caracteres',
    'title.maxLength': 'O título deve ter no máximo 50 caracteres',

    'content.required': 'O conteúdo do post é necessário',
    'content.minLength': 'O conteúdo deve ter no mínimo 5 caracteres',
    'content.maxLength': 'O conteúdo deve ter no máximo 1000 caracteres',
  }
}
