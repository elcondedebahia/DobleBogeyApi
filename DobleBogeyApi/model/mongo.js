var mongoose = require("mongoose");
mongoose.connect('mongodb://nyandoo.cloudapp.net:27017/DobleBogey');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema = {
    "userFirstName": String,
    "userLastName": String,
    "userEmail": String,
    "userPassword": String
};
// create model if not exists.
module.exports = mongoose.model('userLogin', userSchema);