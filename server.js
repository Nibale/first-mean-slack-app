var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
mongoose.connect("mongodb://localhost/cooking", function(err){   
    if(err){
        console.log(err)
    }else{
        console.log("connected to database")
    }
})
var app = express();
app.use(bodyParser.json());
app.use("/cooking", require("./route/cookingRoute"))
app.use(express.static(path.join(__dirname, "public")))
 var port= process.env.PORT ||1119;

app.listen(port, function(){
    console.log("server is listening")
})

