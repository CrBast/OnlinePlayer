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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/login', ({ view, response }) => {
    try {
        auth.check()

    } catch (error) {
        response.route('home')
    }
}).render('login').as('login')

Route.get('/', () => {
    return 'logged in'
}).middleware('userVerificator').as('home')

Route.group(() => {
    Route.get('auth', 'api-v1/UserController.login')
    Route.post('user', 'api-v1/UserController.create').middleware(['auth'])
}).prefix('api/v1').formats(['json'])

Route.any('*', ({ response }) => { response.route('home') })