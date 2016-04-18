var mongoose = require("mongoose");

// create instance of Schema
var mongoSchema = mongoose.Schema;

var tarjetaSchema = {
    //_player: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //_torneo: { type: mongoose.Schema.Types.ObjectId, ref: 'Torneo' },
    handicap: Number,
    score: []
};

// create model if not exists.
module.exports = mongoose.model('Tarjeta', tarjetaSchema);