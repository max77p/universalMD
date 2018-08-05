var orm = require("../config/orm.js");

var umdCommands = {
    all: function (cb) {
        orm.allDoc("appointments", function (res) {
            cb(res);
        });
     },
    createPatient: function (cols, vals, cb) {
        orm.insertPatient("patients", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition,cb) {
        orm.updateOne("appointments", objColVals, condition, function (res) {
            cb(res);
        });
    }
};
module.exports = umdCommands;