var express = require('express');
var app = express();
var router = express.Router();
var tarjetasManager = require('../managers/tarjetasManager');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    tarjetasManager.getAll().then(function (items) {
        res.send(items);
    }).catch(function (error) {
        console.log(error);
    });
});

router.post('/', function (req, res) {
    var tarjeta = {};
    tarjeta.player = req.body.player;
    tarjeta.torneo = req.body.torneo;
    tarjeta.handicap = req.body.handicap;
    tarjeta.score = req.body.score;

    tarjetasManager.insert(tarjeta).then(function (data) {
        res.send(data);
    }).catch(function (error) {
        console.log(error);
        res.send(error);
    });
});

router.get('/:tarjetaId', function (req, res) {
    res.json({ message: 'Informacion de la tarjeta Id' });
});


module.exports = router;