var express = require("express");
var router = express.Router();
var umd = require("../models/umdModel.js");

router.get("/", function (req, res) {
    umd.all(function (data) {
        console.log(data);
        var hasObject = {
            doctors: JSON.stringify(data)
        };
        console.log(hasObject);
        res.render("index");
    });
});

router.get("/form", function (req, res) {
    res.render("form");
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/register", function (req, res) {
    res.render("register");
});


/*===========================================posting data================================*/
router.post("/api/patients", function (req, res) {
    var tableArr = [];//col keys
    var valArr = req.body.symptoms;//just the symptoms
    var allvals=req.body;
    Object.keys(req.body).forEach(x => {
        tableArr.push(x);
        allvals=req.body[x];
    });
    // var symptoms = JSON.stringify(req.body.symptoms);
    console.log("symptoms are " + valArr);
    console.log(valArr);
    // console.log(allvals);
    // console.log(JSON.stringify(req.body.symptoms));
    getPatientCols(valArr);
    function getPatientCols(vals) {
        var arr = [];
        var lengthVal = vals.length; //lengh of symptoms
        console.log(lengthVal);
        // for(i=0;i<colsArr.length-1;i++){
        //   console.log(colsArr[i]);
        // }
        // for (var i = 0; i < lengthCol - 1; i++) {
        //     arr.push(colsArr[i]); //pushes keys up to symptoms
        // }
        // for (var i = 0; i < lengthVal; i++) {
        //     arr.push("s" + (i + 1));
        // }
        // console.log(arr);
    };

    umd.createPatient(tableArr, valArr, function (result) {
        console.log(result);
    });
    res.redirect("/matchedDocs");
});
module.exports = router;