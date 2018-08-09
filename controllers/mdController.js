var express = require("express");
var router = express.Router();
var umd = require("../models/umdModel.js");

router.get("/", function (req, res) {
    umd.all(function (data) {
        // console.log(data);
        // var hasObject = {
        //     doctors: JSON.stringify(data)
        // };

        // console.log(hasObject);
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
router.get("/dashboard/:name", function (req, res) {
    var name=req.params;
    console.log(name);
    var category = req.session.patients;
    console.log("test: " + JSON.stringify(category.symptoms));
    var docObject = {};
    var x = getDoctorAlgorithm(category.symptoms);
    console.log("-------------");
    console.log(x);
    Object.keys(x).forEach(a => {
        switch (a) {
            case 'checkGen':
                docObject['G.P'] = x[a];
                break;
            case 'checkDent':
                docObject['Dentist'] = x[a];
                break;
            case 'checkCardio':
                docObject['Cardiologist'] = x[a];
                break;
            case 'checkNeuro':
                docObject['Neuorologist'] = x[a];
                break;
        }
    });
    var vals = "(";
    var itemsprocessed = [];
    Object.keys(docObject).forEach(x => {
        console.log(x);
        itemsprocessed.push(x);
        vals += `"${x}"` + ",";
        // itemsprocessed++;
        // if (itemsprocessed == docObject.length) {
        //     cb();
        // }
    });
    var val2 = vals.slice(0, -1) + ")";
    console.log(val2);
    //    res.json(docObject);
    umd.matchDocs(val2, function (data) {
        
        var renderDocs = {
            doctors: data,
            doci:itemsprocessed
        }
        // console.log(renderDocs.doctors);
        console.log(renderDocs.doci);
        // itemsprocessed=[];
        res.render("dashboard", renderDocs);
        itemsprocessed=[];
    });
    console.log(docObject);

});

var getDoctorAlgorithm = function (choices) {
    var choiceArr = choices.split(",");
    console.log(choiceArr);
    let symptomObj = {
        genPrac: ["Fever", "Headache", "Skin Irritations", "Joint/Muscle Pain"],
        dentist: ["Toothache", "Broken Tooth"],
        cardiologist: ["Chest Pain", "Numbness"],
        neuorologist: ["Seisure", "Migrains"]
    }

    let currSymp = function (checkGen, checkDent, checkCardio, checkNeuro) {
        this.checkGen = {
                "name": "G.P",
                "length": checkGen.length,
                "value": 0,
                "field": checkGen
            },
            this.checkDent = {
                "name": "Dentist",
                "length": checkDent.length,
                "value": 1,
                "field": checkDent
            },
            this.checkCardio = {
                "name": "Cardiologist",
                "length": checkCardio.length,
                "value": 3,
                "field": checkCardio
            },
            this.checkNeuro = {
                "name": "Neuorologist",
                "length": checkNeuro.length,
                "value": 3,
                "field": checkNeuro
            }
    }

    Object.keys(symptomObj).forEach(x => {
        switch (x) {
            case 'genPrac':
                console.log(x);
                checkGen = symptomObj[x].filter(y => choiceArr.includes(y));
                break;
            case 'dentist':
                checkDent = symptomObj[x].filter(y => choiceArr.includes(y));
                break;
            case 'cardiologist':
                checkCardio = symptomObj[x].filter(y => choiceArr.includes(y));
                break;
            case 'neuorologist':
                checkNeuro = symptomObj[x].filter(y => choiceArr.includes(y));
                break;
        }
    })

    //see which array is larger
    var newpatient = new currSymp(checkGen, checkDent, checkCardio, checkNeuro);
    console.log("++++++++++++++++");
    // console.log(newpatient);

    Object.keys(newpatient).forEach(x => {
        if (newpatient[x].length == 0) {
            delete newpatient[x];
        }
    });
    return newpatient;
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
    res.redirect("/dashboard/"+req.body.name);
});


module.exports = router;