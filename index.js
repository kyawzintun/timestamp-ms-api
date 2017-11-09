const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/timestamp-ms', (req, res) => {
  res.send('timestamp microservice api work');
});

app.listen(app.get('port'), () => {
  console.log('app is running on port ', app.get('port'));
})