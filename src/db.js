import knex from 'knex'
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const pg = knex({
  client: 'pg',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  }
})

export { pg }
