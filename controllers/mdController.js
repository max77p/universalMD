var express=require("express");
var router=express.Router();
var umd = require("../models/umdModel.js");

router.get("/index",function(req,res){
    umd.all(function(data){
        console.log(data);
        var hasObject = {
            doctors: JSON.stringify(data)
          };
          console.log(hasObject);
          res.render("index");
    });
});

router.get("/form",function(req,res){
    res.render("form");
});

router.get("/login",function(req,res){
    res.render("login");
});

router.get("/register",function(req,res){
    res.render("register");
});
module.exports=router;