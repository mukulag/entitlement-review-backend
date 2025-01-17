const sql = require('mssql');

// Database configuration
const config = {
  user: process.env.DB_USER,        // Database username
  password: process.env.DB_PASSWORD, // Database password
  server: process.env.DB_HOST,       // Azure SQL server name
  database: process.env.DB_NAME,     // Database name
  options: {
    encrypt: true,                  // Use encryption for Azure SQL
    trustServerCertificate: false   // Set to true only for local dev/test
  },
  port: parseInt(process.env.DB_PORT, 10) || 1433
};

console.log('Database Config:', config);

// Create a connection pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to Azure SQL Database');
    return pool;
  })
  .catch(err => {
    console.error('Database connection failed!', err);
    throw err;
  });
  console.log('Database Config:', config);
module.exports = {
  sql,
  poolPromise
};
