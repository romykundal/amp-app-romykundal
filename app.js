const ampify = require('ampify');
const express = require('express');
const fs = require('fs');
const app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.get('/amp', (req, res) => {
  const html = 'public/amp_pages/amp1.html';
  fs.readFile(html, (err, data) => {
    if (err) throw err;
    
    // console.log(data);
    const amp = ampify(data, {cwd: 'amp'});
    res.send(amp); // serving AMP content

  });
  
});



// Listen
var port = process.env.PORT || 4300;
app.listen(port);
console.log('Start server by Rohit kumar (romykundal@gmail.com)  Listening on localhost:'+ port);
// Rohit kumar (romykundal@gmail.com)