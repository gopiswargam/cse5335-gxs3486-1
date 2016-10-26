var express  = require('express');
var app = express();
var fs = require('fs');
var port = 8000;
app.get('/getPeople',function(request,response){
    //reading data from json file
    fs.readFile("people.json",'utf8',function(err,data){
    response.end(data);
     });
})

app.get('/', function(request, response) {
  response.sendFile( __dirname + "/" + "index.html" );
});

app.get('/custom.js', function(request, response) {
  response.sendFile( __dirname + "/" + "custom.js" );
});
var server = app.listen(port, function () {
    console.log("server running at 8000")
})