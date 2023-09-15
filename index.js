const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;


app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
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