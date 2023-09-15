const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;


app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.use(express.static(__dirname + '/public'));

app.get('/api/home', (req, res) => {
  res.status(200).json('Welcome to Home page API route');
})

app.listen(PORT, () => {
  console.log(`Server is running`);
});

// Export the Express API
module.exports = app