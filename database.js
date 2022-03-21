const mysql = require('mysql2/promise')

// Set up environment variables
require('dotenv').config()
console.log(process.env)

// Create connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 8889
})

module.exports = db