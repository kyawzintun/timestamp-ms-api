const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.get('/', function(req, res){
  res.send('api works');
})

app.get('/timestamp-ms', function (req, res){
  let timestamp = { "unix": 123, "natural": null };
  res.json(timestamp);
});

app.listen(port, function () {
  console.log('Node app is running on port', port);
});