'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UserVerificator {
  async handle({ response, auth }, next) {
    try {
      await auth.check()
    } catch (error) {
      return response.route('login')
    }
    await next()
  }
}

module.exports = UserVerificator
