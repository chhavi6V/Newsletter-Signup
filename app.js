const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/signup.html");
})

app.post("/", function(req,res){
    const firstName =  req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data= {
        members : [
            {
                email_address : email,
                status: "subscribed",
                merge_fields:{
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url ="https://us21.api.mailchimp.com/3.0/lists/ad725a154c";

    const options = {
        method: "POST",
        auth : "chhavi1:1d808d5615c0b1deb99daf9f2f2b1eb7-us21"
    }

    const request = https.request(url ,options,function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data)); 
        })
    })

    request.write(jsonData);
    request.end();
})





app.listen(3000, function(){
    console.log("server has started on port 3000");
})



//api
//1d808d5615c0b1deb99daf9f2f2b1eb7-us21

//ad725a154c.
