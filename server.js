// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.end('Hello!!')
})

// Simple in-memory store


app.get('/api/whoami', function(req, res) { 
   console.log(Object.keys(req));
   console.log(req.headers);
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var lang = req.headers['accept-language'].split(';')[0];
  var soft = req.headers['user-agent'].match()[1];
  res.json({'ip': ip, "language": lang, "software": soft})
    
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

