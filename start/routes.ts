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

Route.get('/', async ({ response }) => {
  response.redirect('/postagens')
})

// Those routes should be only accessible
// when you are logged in
Route.get('/postagens', 'PostsController.index')
Route.group(() => {
  Route.on('/nova-postagem').render('pages/create-post')
  Route.post('/posts/create', 'PostsController.create')
  Route.get('/posts/:id/update', 'PostsController.renderUpdate')
  Route.post('/posts/:id/update', 'PostsController.update')
  Route.get('/posts/:id/delete', 'PostsController.delete')
  Route.get('/sair', 'SessionController.logout')
}).middleware('auth')

// Those routes should be only accessible
// when you are not logged in
Route.group(() => {
  Route.on('/entrar').render('pages/login')
  Route.on('/cadastrar-se').render('pages/signup')
  Route.post('/users/login', 'SessionController.login')
  Route.post('/users/store', 'UsersController.store')
}).middleware('guest')

// Only to populate Database in development
Route.get('/users/populate', 'PopulateController.index')
