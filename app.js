const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const request = require('request');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('search');
});

app.get('/results', function(req, res) {
  var query = req.query.search;
  var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=ba7f203a';
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(data);
      res.render('results', { data: data });
    }
  });
});

app.listen(3000, () => {
  console.log(`Movie App has started on port ${PORT}`);
});
