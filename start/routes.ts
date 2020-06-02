/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/user', 'UsersController.index')

  // Those routes should be only accessible
  // when users are logged in
  Route.group(() => {
    Route.get('/logout', 'SessionController.logout')
  }).middleware('auth')


  // Those routes should be only accessible
  // when users are not logged in
  Route.group(() => {
    Route.post('/login', 'SessionController.login')
    Route.post('/signup', 'UsersController.signup')

  }).middleware('guest')

}).prefix('api')


// Redirects other routes to frontend
Route.any('*', async ({ view }) => view.render('frontend'))
