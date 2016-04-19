var Promise = require('bluebird');
var mongoOp = require("../model/tarjeta");

var getAll = function () {

    return new Promise(function (resolve, reject) {

        mongoOp.find({})
            .populate('_player') // space delimited path names
            .exec(function (err, data) {

                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                };
            });
    });
};

var insert = function (tarjeta) {
    return new Promise(function (resolve, reject) {
        var db = new mongoOp();

        db._player = tarjeta.player;
        //db.torneo = tarjeta.torneo;
        db.handicap = tarjeta.handicap;
        db.score = tarjeta.score;

        db.save(function (err) {
            if (err) {
                console.log(err);
                reject({ "error": true, "message": "Error adding data" });
            } else {
                resolve({ "error": false, "message": "Data added" });
            }
        });
    });
}

var getById = function (id) {

    console.log(id);

    return new Promise(function (resolve, reject) {

        mongoClient.connect(url, function (err, db) {

            var collection = db.collection('articles');

            collection.findOne({ '_id': id }, function (err, item) {

                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                };

            });
        });
    });
};

module.exports.getAll = getAll;
module.exports.insert = insert;
module.exports.getById = getById;