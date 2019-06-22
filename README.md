# Streaming site for private groups
## Api integration

**Routes**
```js
Route.group(() => {
    Route.get('auth', 'api-v1/UserController.login').as('apiLogin')
    Route.get('auth/logout', 'api-v1/UserController.logout')

    Route.get('users', 'api-v1/UserController.getAll').middleware(['auth'])
    Route.post('users', 'api-v1/UserController.create').middleware(['auth'])

    Route.get('videos', 'api-v1/VideoController.getAll')
    Route.post('videos', 'api-v1/VideoController.store').middleware(['auth'])
}).prefix('api/v1').formats(['json'])
```

**Login example**
```
GET > http://127.0.0.1:3333/api/v1/auth?username=admin&password=123456
```
