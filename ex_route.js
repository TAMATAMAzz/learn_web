var express = require('express');
var app = express();
var path = require('path')

app.get('/' ,function(req,res){
    res.json({res:'hello world'})
});

app.get('/show' ,function(req,res){
    res.json({res:'show show'})
});

app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/game', function(req,res){
    res.sendFile(path.join(__dirname, '/public/game.html'))
})

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s", host,port);
});
