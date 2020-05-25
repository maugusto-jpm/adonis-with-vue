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

// Those routes should be only accessible
// when you are logged in
Route.group(() => {
  // Routes goes here
})
  .middleware('auth')
  .prefix('api')

// Those routes should be only accessible
// when you are not logged in
Route.group(() => {
  // Routes goes here
})
  .middleware('guest')
  .prefix('api')

// Redirects other routes to frontend
Route.any('*', async ({ view }) => view.render('frontend'))
