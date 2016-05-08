var express = require('express');        // call express
var app = express();                 // define our app using express
var cors = require('cors');
var bodyParser = require('body-parser');
var resultados = require('./routes/resultados');
var jugadores = require('./routes/jugadores');
var torneos = require('./routes/torneos');
var mongoose = require("mongoose");
mongoose.connect('mongodb://nyandoo.cloudapp.net:27017/DobleBogey');

// configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;        // set our port


var router = express.Router();   

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Hooray! Welcome to our api!' });
});

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/resultados', resultados);
app.use('/jugadores', jugadores);
app.use('/torneo', torneos);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);