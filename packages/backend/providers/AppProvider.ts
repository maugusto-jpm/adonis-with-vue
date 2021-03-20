import { IocContract } from '@adonisjs/fold'

export default class AppProvider {
  constructor (protected $container: IocContract) {
  }

  public register(): void {
    // Register your own bindings
  }

  public boot(): void {
    // IoC container is ready
  }

  public shutdown(): void {
    // Cleanup, since app is going down
  }

  public ready(): void {
    // App is ready
  }
}
