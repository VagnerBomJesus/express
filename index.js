var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("Página Inicial");
});

app.get('/marketplace',function(req,res){
    res.send("Marketplace");
});

app.get('/grupos',function(req,res){
    res.send("Grupos");
}); 

app.get('/jogos',function(req,res){
    res.send("Jogos");
});

app.listen(8081,function(){
    console.log("Servidor ativo no porto http://localhost:8081/");
});