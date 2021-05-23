const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'api-test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = (sql = '', object = '') => connection
  .promise()
  .query(sql, object)
  .then(([rows]) => rows || null)
  .catch((error) => {
    throw error;
  });
