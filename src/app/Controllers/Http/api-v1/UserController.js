'use strict'

const User = use('App/Models/User')
const Role = use('App/Models/Role')

class UserController {
    async login({ auth, request, response }) {
        const data = request.only(['username', 'password'])
        try {
            await auth.attempt(data.username, data.password).remember()
            response.send("{OK}")
        } catch (E_USER_NOT_FOUND) {
            return response.status(401).send("not Okay")
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
