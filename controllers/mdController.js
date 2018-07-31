var express=require("express");
var router=express.Router();
var umd = require("../models/umdModel.js");

router.get("/",function(req,res){
    umd.all(function(data){
        console.log(data);
        var hasObject = {
            doctors: JSON.stringify(data)
          };
          console.log(hasObject);
          res.render("index", hasObject);
    });
});

module.exports=router;