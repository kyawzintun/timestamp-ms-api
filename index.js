const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.get('/', function(req, res){
  res.send('api works');
})

app.get('/timestamp-ms', function (req, res){
  let timestamp = { "unix": 123, "natural": null };
  res.json(timestamp);
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Node app is running on port', process.env.PORT || 5000);
});