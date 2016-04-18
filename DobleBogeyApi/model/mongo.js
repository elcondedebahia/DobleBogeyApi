var mongoose = require("mongoose");

// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema = {
    userFirstName : String,
    userLastName : String,
    userEmail : String,
    userPassword : String
};

//var torneoSchema = {
//    nombre: String,
//    Fecha: Date
//};

// create model if not exists.
module.exports = mongoose.model('User', userSchema);
//module.exports = mongoose.model('Torneo', torneoSchema);