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

Route.get('/login', async ({ response, view, auth }) => {
    try {
        await auth.check()
        return response.route('home')
    } catch (error) {
        return view.render('login')
    }
}).as('login')

Route.get('/', ({ view }) => {
    return view.render('home')
}).middleware('userVerificator').as('home')

Route.group(() => {
    Route.get('auth', 'api-v1/UserController.login').as('apiLogin')
    Route.get('auth/logout', 'api-v1/UserController.logout')

    Route.post('users', 'api-v1/UserController.create').middleware(['auth'])

    Route.get('videos', 'api-v1/VideoController.getAll')
    Route.post('videos', 'api-v1/VideoController.store').middleware(['auth'])
}).prefix('api/v1').formats(['json'])

Route.any('*', ({ response }) => { response.route('home') })