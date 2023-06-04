const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req,res){
    res.send(__dirname +"/signup.html");
})

app.listen(3000, function(){
    console.log("server has started on port 3000");
})

