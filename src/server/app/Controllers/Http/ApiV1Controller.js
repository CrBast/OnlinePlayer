'use strict'

class ApiV1Controller {
    async login({ auth, request, response }) {
        const data = request.only(['username', 'password'])
        try {
            await auth.attempt(data.username, data.password).remember()
        } catch (error) {

        }
    }
}

module.exports = ApiV1Controller
