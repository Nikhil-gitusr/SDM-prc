var express = require("express");
var app= express();

app.get("/",function (req,resp){
    resp.send("My Name is Nikhil.....");
});

app.listen(8081);
console.log("server running at port");