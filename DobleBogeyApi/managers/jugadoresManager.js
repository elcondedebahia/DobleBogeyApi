var Promise = require('bluebird');
var mongoOp = require("../model/mongo");
var mongoose = require("mongoose");

var getAll = function () {

    return new Promise(function (resolve, reject) {

        mongoOp.find({}, function (err, data) {

            if (err) {
                reject(err);
            } else {
                resolve(data);
            };
        });
    });
};

var insert = function (user) {
    return new Promise(function (resolve, reject) {

        var db = mongoose.model('User');

        var usuario = {};
        usuario.userFirstName = user.firstName;
        usuario.userLastName = user.lastName;
        usuario.userEmail = user.email;
        usuario.userPhone = user.phone;
        usuario.userHandicap = user.handicap;
        usuario.userPassword = user.password;

        if (!user._id) {
            user._id = new mongoose.mongo.ObjectID();
        }

        db.findByIdAndUpdate(user._id, usuario, { upsert: true }, function (err) {
            if (err) {
                reject({ "error": true, "message": "Error adding data" });
            } else {
                resolve({ "error": false, "message": "Data added" });
            }
        });


        resolve();
    });
}

var getPaged = function (pageIndex, pageSize) {

    return new Promise(function (resolve, reject) {

        mongoClient.connect(url, function (err, db) {

            var collection = db.collection('articles');

            collection.find().skip((pageIndex - 1) * pageSize).limit(pageSize).toArray(function (err, items) {

                if (err) {
                    reject(err);
                } else {
                    resolve(items);
                };

            });
        });
    });
};

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

module.exports.insert = insert;
module.exports.getAll = getAll;
module.exports.getPaged = getPaged;
module.exports.getById = getById;