var express = require('express');
var app = express();
var router = express.Router();
var jugadoresManager = require('../managers/jugadoresManager');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    var jugadores = jugadoresManager.getAll().then(function (items) {
        res.send(items);
    }).catch(function (error) {
        console.log(error);
    });
});

router.post('/', function (req, res) {
    var user = {};
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;

    var jugadores = jugadoresManager.insert(user).then(function (data) {
        res.send(data);
    }).catch(function (error) {
        console.log(error);
    });
});


router.get('/:jugadorId', function (req, res) {
    res.json({ message: 'Informacion del jugador Id' });
});


module.exports = router;