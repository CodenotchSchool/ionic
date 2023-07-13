const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www/'));
app.get('/*',function(req,res){
    res.sendFile("index.html", {root: __dirname + '/www/'});
});


