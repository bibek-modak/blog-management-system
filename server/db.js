const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'D5_Bibek_83732',
  password: 'bibek',
  port: 3306,
  database: 'hackathon',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

module.exports = { pool }

                       