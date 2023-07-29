import 'dotenv/config'

export default {
  "development": {
    "username": process.env.DB_USER, 
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST, 
    "dialect": process.env.DB_DIALECT 
  },
  "test": {
    "username": "root",
    "password": "admin",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "admin",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
