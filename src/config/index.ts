import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT,
  databaseURL:
    typeof process.env.DATABASE_URI === 'string'
      ? process.env.DATABASE_URI
      : '',
}
