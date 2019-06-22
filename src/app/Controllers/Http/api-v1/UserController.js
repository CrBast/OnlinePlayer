'use strict'

const Role = use('App/Models/Role')
const User = use('App/Models/User')
const Database = use('Database')

class UserController {
    async login({ auth, request, response }) {
        const data = request.only(['username', 'password'])
        try {
            await auth.check()
            return response.status(200).send({ message: 'You are already logged!' })
        } catch (error) {
            try {
                return await auth.remember(true).attempt(data.username, data.password)
            } catch (error) {
                return response.status(401).send({ message: 'You are not registered!' })
            }
        }
    }

    async logout({ auth, response }) {
        try {
            await auth.check()
            await auth.logout()
            return response.status(200).send({ message: 'Success' })
        } catch (error) {
            return response.status(409).send({ message: 'You have to be logged' })
        }

    }

    async create({ auth, response, request }) {
        try {
            const adminRole = await Role.findBy('name', 'admin')
            if (auth.user.role_id != adminRole.id) {
                return response.status(401).send({ message: "Need admin elevation" })
            }
            const data = request.only(['username', 'email', 'password', 'role'])
            let user = new User()
            user.username = data.username
            user.email = data.email
            user.password = data.password
            const role = await Role.findBy('name', data.role)
            user.role_id = role.id
            await user.save()
            return user
        } catch (error) {
            return response.status(500).send({ message: error.message })
        }
    }
    async getAll({ }) {

    }
}

module.exports = UserController
