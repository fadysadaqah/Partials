var express = require('express');
var app = express();
app.use(express.static('public'));

app.get("/item",function(req,res){
    res.render('item-div.ejs');
})
app.listen(5000)