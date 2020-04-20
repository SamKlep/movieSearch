const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const request = require('request');
app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?s=texas&apikey=ba7f203a", function(error, res, body){
        if(!error && res.statusCode == 200) {
            var results = JSON.parse(body)
            res.send(results);
        }
    });
});


app.listen(3000, () => {
    console.log(`Movie App has started on port ${PORT}`);
}); 