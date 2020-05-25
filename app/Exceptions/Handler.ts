/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import UnauthorizedAccessHandler from './Handlers/UnauthorizedAccessHandler';
import CredentialsInvalidHandler from './Handlers/CredentialsInvalidHandler';

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract): Promise<any> {
    this.logger.error(error.code)
    console.log(error.code)

    switch (error.code) {
    case 'E_UNAUTHORIZED_ACCESS':
      return await UnauthorizedAccessHandler(error, ctx)
    case 'E_INVALID_AUTH_UID':
    case 'E_INVALID_AUTH_PASSWORD':
      return await CredentialsInvalidHandler(error, ctx)
    default:
      return super.handle(error, ctx)
    }
  }
}
