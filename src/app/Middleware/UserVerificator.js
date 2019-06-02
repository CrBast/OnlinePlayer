'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class UserVerificator {
  async handle({ response }, next) {
    try {
      auth.check()
    } catch (error) {
      response.route('login')
    }
    await next()
  }
}

module.exports = UserVerificator
