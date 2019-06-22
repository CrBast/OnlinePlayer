# Streaming site for private groups
## Api integration
```js
Route.group(() => {
    Route.get('auth', 'api-v1/UserController.login').as('apiLogin')
    Route.get('auth/logout', 'api-v1/UserController.logout')

    Route.post('users', 'api-v1/UserController.create').middleware(['auth']) //Need admin account

    Route.get('videos', 'api-v1/VideoController.getAll')
    Route.post('videos', 'api-v1/VideoController.store').middleware(['auth'])
}).prefix('api/v1').formats(['json'])
```
