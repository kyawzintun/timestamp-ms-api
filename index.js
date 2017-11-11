const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.get('/', function(req, res){
  res.send('api works');
})

app.get('/timestamp-ms/:time', function (req, res){
  let time = req.params.time;
  let isNumber = /^\d+$/.test(time);
  let timestamp;
  if(isNumber) {
    let d = new Date(time*1000);
    timestamp = {
      "unix": time,
      "natural": formattedDate(d)
    };
  }else {
    let date = new Date(time);
    let unixtime;
    let natural;
    if (date != 'Invalid Date') {
      unixtime = date.getTime() / 1000;
      natural = formattedDate(date);
    } else {
      unixtime = null;
      natural = null;
    }
    timestamp = {
      "unix": unixtime,
      "natural": natural
    };
  }
  res.json(timestamp);
});

function formattedDate(date) {
  return month[date.getMonth()] + ' ' + date.getDay() + ' , ' + date.getFullYear();
}

app.listen(port, function () {
  console.log('Node app is running on port', port);
});