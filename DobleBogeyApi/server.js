var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var resultados = require('./routes/resultados');
var jugadores = require('./routes/jugadores');
var tarjetas = require('./routes/tarjetas');
var mongoose = require("mongoose");
mongoose.connect('mongodb://nyandoo.cloudapp.net:27017/DobleBogey');

// configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


var router = express.Router();   

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Hooray! Welcome to our api!' });
});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/resultados', resultados);
app.use('/jugadores', jugadores);
app.use('/tarjetas', tarjetas);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);