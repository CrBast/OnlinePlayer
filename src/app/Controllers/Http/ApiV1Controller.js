'use strict'

class ApiV1Controller {
    async login({ auth, request, response }) {
        const data = request.only(['username', 'password'])
        try {
            await auth.attempt(data.username, data.password).remember()
            response.send("{OK}")
        } catch (E_USER_NOT_FOUND) {
            return response.status(401).send("not Okay")
        }
    }
    async user_create({ }) {

    }
}

module.exports = ApiV1Controller
