const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  //var baseURL = "https://"+ process.env.VERCEL_URL +"/api/home";
  res.render('pages/home');
});


app.get('/api/home', (req, res) => {
  res.status(200).json('Welcome to Home page API route'+  process.env.VERCEL_URL);
})

app.listen(PORT, () => {
  console.log(`Server is running`);
});

// Export the Express API
module.exports = app