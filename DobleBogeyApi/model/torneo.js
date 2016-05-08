var mongoose = require("mongoose");

// create instance of Schema
var mongoSchema = mongoose.Schema;

var Tarjeta = new mongoose.Schema({
    _player: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    handicap: Number,
    score: []
});

var torneoSchema = {
    nombre: String,
    fecha: Date,
    tarjetas: [Tarjeta],
};

// create model if not exists.
module.exports = mongoose.model('Torneo', torneoSchema);