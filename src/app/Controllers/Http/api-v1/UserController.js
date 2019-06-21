'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */

const Role = use('App/Models/Role')

class UserController {
    async login({ auth, request }) {
        const data = request.only(['username', 'password'])
        try {
            await auth.check()
            return "Okay"
        } catch (error) {
            try {
                return await auth.remember(true).attempt(data.username, data.password)
            } catch (error) {
                return "bad credentials"
            }
        }
    }

    async logout({ auth }) {
        try {
            await auth.check()
            await auth.logout()
            return "okey"
        } catch (error) {
            return 'Not logged before'
        }

    }

    async create({ auth, response, request }) {
        try {
            if (auth.user.role_id != Role.where('name', "admin")) {
                return response.status(401).send('{message: ""}').formats(['json'])
            }
        } catch (error) {

        }
    }
}

module.exports = UserController
