const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Entitlement Review System Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
