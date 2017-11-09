const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.get('/', (req, res) => {
  res.send('api works');
})

app.get('/timestamp-ms', (req, res) => {
  let timestamp = { "unix": 123, "natural": null };
  res.json(timestamp);
});

app.listen(app.get('port'), () => {
  console.log('app is running on port ', app.get('port'));
})