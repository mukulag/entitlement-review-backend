const express = require('express');
const { poolPromise, sql } = require('./dbConfig');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

require('dotenv').config();

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Entitlement Review System Backend is Running!');
});

// Sample route to fetch users
app.get('/users', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Users');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error querying the database', err);
    res.status(500).send('Error querying the database');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
