var express = require("express");
var Cooking = require("../models/cooking");
var cookingRoute = express.Router();

cookingRoute.route("/")
.get(function(req,res){
    Cooking.find({}, function(err, data){
        if(err){
            res.status(500).send(err);
        }
        res.send(data);
    })
})

.post(function(req,res){
    var newCook = new Cooking(req.body);
    newCook.save(newCook, function(err, data){
        if(err){
    res.status(500).send(err);

        }
        res.send(data)
    })
})

cookingRoute.route("/:id")
.get(function(req,res){
    Cooking.findById(req.params.id, function(err,data){
        if(err){
            res.ststus(500).send(err);
        }
        res.send(data)
    })
    
})
.delete(function(req,res){
    Cooking.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.status(500).send(err);
        }
        res.send({
            message: "your item was successfully deleted"
        })
    })
})

.put(function(req,res){
    Cooking.findByIdAndUpdate(req.params.id, req.body,{new:true}, function(err,data){
        if(err){
            res.status(500).send(err);
        }
        res.send(data)
    })
})

module.exports = cookingRoute;
