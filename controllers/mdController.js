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
    var valArr = JSON.stringify(req.body.symptoms);//just the symptoms
console.log(valArr);
    var allvals=[];
    Object.keys(req.body).forEach(x => {
        tableArr.push(x);
        allvals.push(req.body[x]);
    });
    // var symptoms = JSON.stringify(req.body.symptoms);
    console.log("symptoms are " + valArr);
    // console.log(valArr);
    console.log(allvals);
    // console.log(JSON.stringify(req.body.symptoms));
    var arr = [];
    getPatientCols(allvals,valArr);

    function getPatientCols(allval,vals) {
        var stringwithqs;
         for (var i = 0; i < allval.length - 1; i++) {
            arr.push(`"${allval[i]}"`); //pushes keys up to symptoms
        }
        arr.push(valArr);
        
    };
    console.log(arr);
    umd.createPatient(tableArr, arr, function (result) {
        console.log(result);
    });
    res.redirect("/matchedDocs");
});
module.exports = router;