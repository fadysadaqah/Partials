var express = require('express');
var app = express();
app.use(express.static('public'));

app.get("/item",function(req,res){
    res.render('item-div.ejs');
})
app.get("/",function(req,res){
    res.render('home.ejs');
})
app.get("/m",function(req,res){
    res.render('mobile/home.ejs');
})
app.listen(5000)