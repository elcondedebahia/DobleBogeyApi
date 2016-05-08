var Promise = require('bluebird');
var torneoModel = require("../model/torneo");

var getAll = function () {

    return new Promise(function (resolve, reject) {

        torneoModel.find({})
            .exec(function (err, data) {

                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                };
            });
    });
};

var insert = function (torneo) {
    return new Promise(function (resolve, reject) {
        var db = new torneoModel();

        db.nombre = torneo.nombre;
        db.fecha = torneo.fecha;

        db.save(function (err, torneo) {
            if (err) {
                console.log(err);
                reject({ "error": true, "message": "Error adding data" });
            } else {
                resolve({ "error": false, "message": torneo._id });
            }
        });
    });
}

var getById = function (id) {

    console.log(id);

    return new Promise(function (resolve, reject) {

        torneoModel.findOne({ '_id': id }, function (err, item) {

                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                };

            });
        })
};

module.exports.getAll = getAll;
module.exports.insert = insert;
module.exports.getById = getById;