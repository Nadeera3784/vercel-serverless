const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;



const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  //var baseURL = "https://"+ process.env.VERCEL_URL +"/api/home";
  res.render('pages/home');
});

//app.use(express.static(__dirname + '/public'));

app.get('/api/home', (req, res) => {
  res.status(200).json('Welcome to Home page API route'+  process.env.VERCEL_URL);
})

app.listen(PORT, () => {
  console.log(`Server is running`);
});

// Export the Express API
module.exports = app