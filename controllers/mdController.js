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

// function redirect1(el){
router.get("/dashboard", function (req, res) {
    var category = req.session.patients;
    console.log("test: " + JSON.stringify(category.symptoms));
    var hasobject = {
        query: category.name
    };
    res.render("dashboard", hasobject);
});

function getDoctorAlgorithm() {
    let genPrac = ["fever", "headache", "skin irritations", "joint/muscle pain"];
    let dentist = ["toothache", "broken tooth"];
    let cardiologist = ["chest pain", "numbess"];
    let neurologist = ["seisure", "migrains"];
}

/*===========================================posting data================================*/
router.post("/patients", function (req, res) {
    var tableArr = []; //col keys
    var valArr = JSON.stringify(req.body.symptoms); //just the symptoms
    // console.log(valArr);
    var allvals = [];
    Object.keys(req.body).forEach(x => {
        tableArr.push(x);
        allvals.push(req.body[x]);
    });
    console.log("symptoms are " + valArr);
    // console.log(allvals);
    var arr = [];
    getPatientCols(allvals, valArr);

    function getPatientCols(allval, vals) {
        for (var i = 0; i < allval.length - 1; i++) {
            arr.push(`"${allval[i]}"`); //pushes keys up to symptoms
        }
        arr.push(valArr);
    };
    // console.log(arr);
    umd.createPatient(tableArr, arr, function (result) {
        console.log(result);
    });
    req.session.patients = req.body;
    res.redirect("/dashboard");
});




module.exports = router;