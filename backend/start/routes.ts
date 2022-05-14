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
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('/login', 'AuthController.login')
    Route.post('/logout', 'AuthController.logout')
  })

  Route.group(() => {
    Route.post('/register', 'UsersController.register')
  }).prefix('/user')

  Route.group(() => {
    Route.get('/', 'TransactionsController.index')
    Route.post('/', 'TransactionsController.store')
    Route.get('/:id', 'TransactionsController.show')
    Route.post('/:id', 'TransactionsController.update')
    Route.delete('/:id', 'TransactionsController.delete')
  }).prefix('/transaction').middleware('auth')

}).prefix('/api')

