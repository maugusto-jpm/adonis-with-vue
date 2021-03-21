import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  NODE_ENV: Env.schema.enum(['testing', 'development', 'production'] as const),

  LOG_LEVEL: Env.schema.enum(
    [
      'error', 'warn', 'info', 'verbose', 'debug',
    ] as const),
  SESSION_DRIVER: Env.schema.string(),
  COOKIE_NAME: Env.schema.string.optional(),

  DB_CONNECTION: Env.schema.enum(['sqlite', 'pg'] as const),
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string(),
  DB_NAME: Env.schema.string(),
  DB_SSL: Env.schema.boolean(),
})
