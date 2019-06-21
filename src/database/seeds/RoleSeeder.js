'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RoleSeeder {
  async run() {
    await Database.table('roles').insert({
      name: 'admin',
      details: 'Admin accounts',
      created_at: Database.fn.now(),
      updated_at: Database.fn.now()
    })
    await Database.table('roles').insert({
      name: 'contributor',
      details: 'Contributor accounts',
      created_at: Database.fn.now(),
      updated_at: Database.fn.now()
    })
    await Database.table('roles').insert({
      name: 'visitor',
      details: 'Visitor accounts',
      created_at: Database.fn.now(),
      updated_at: Database.fn.now()
    })

    await Database.table('users').insert({
      username: 'admin',
      role_id: Database.select('id').from('roles').where({ name: 'admin' }),
      password: await Hash.make('123456'),
      created_at: Database.fn.now(),
      updated_at: Database.fn.now()
    })
  }
}

module.exports = RoleSeeder
