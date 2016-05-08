var express = require('express');
var app = express();
var router = express.Router();
var torneosManager = require('../managers/torneoManager');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    torneosManager.getAll().then(function (items) {
        res.send(items);
    }).catch(function (error) {
        console.log(error);
    });
});

router.post('/', function (req, res) {
    var torneo = {};
    torneo.nombre = req.body.nombre;
    torneo.fecha = req.body.fecha;

    torneosManager.insert(torneo).then(function (data) {
        res.send(data);
    }).catch(function (error) {
        console.log(error);
        res.send(error);
    });
});

router.get('/:torneoId', function (req, res) {
    
    var torneoId = req.params.torneoId;

    torneosManager.getById(torneoId).then(function (data) {
        res.send(data);
    }).catch(function (error) {
        console.log(error);
        res.send(error);
    });
});


module.exports = router;