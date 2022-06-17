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
    Route.get('/incomes', 'TransactionsController.incomes')
    Route.get('/outcomes', 'TransactionsController.outcomes')
    Route.post('/', 'TransactionsController.store')
    Route.get('/:id', 'TransactionsController.show')
    Route.put('/:id', 'TransactionsController.update')
    Route.delete('/:id', 'TransactionsController.delete')
  }).prefix('/transaction').middleware('auth')

  Route.group(() => {
    Route.get('/', 'CategoriesController.index')
    Route.get('/:id', 'CategoriesController.show')
    Route.post('/', 'CategoriesController.store')
    Route.post('/:id', 'CategoriesController.update')
    Route.delete('/:id', 'CategoriesController.delete')
  }).prefix('/category').middleware('auth')

}).prefix('/api')

