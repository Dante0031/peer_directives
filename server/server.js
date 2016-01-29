/**
 * Created by NathanBriscoe on 1/29/16.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static("server/public"));

app.use('/', function(request, response){
   response.sendFile(path.join(__dirname, 'public/views/index.html'));
});














var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening of port', port);
});