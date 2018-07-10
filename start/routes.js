'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/','MainController.index')
Route.post('/img','MainController.img').as('img')

Route.post('/apiImg','MainController.apiImg')
Route.get('/getMusic','MainController.getMusic')



Route.group(()=>{
    Route.post('auth/register','UserController.register')
    Route.post('auth/login','UserController.login')
}).prefix("api/")

