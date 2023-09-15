const express = require('express')
const app = express()
const PORT = 4000


app.get('/', (req, res) => {
  res.send('Default API route')
})

app.get('/home', (req, res) => {
  res.status(200).json('Welcome to Home page API route');
})

app.listen(PORT, () => {
  console.log(`Server is running`);
});

// Export the Express API
module.exports = app