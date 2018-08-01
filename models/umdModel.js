var orm = require("../config/orm.js");

var umdCommands = {
    all: function (cb) {
        orm.all("appointments", function (res) {
            cb(res);
        });
     },
    create: function (cols, vals, cb) {
        orm.insertOne("appointments", cols, vals, function (res) {
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