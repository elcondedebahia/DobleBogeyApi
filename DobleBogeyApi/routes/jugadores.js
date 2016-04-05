var express = require('express');
var app = express();
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'todos los jugadores' });
});

router.get('/:jugadorId', function (req, res) {
    res.json({ message: 'Informacion del jugador Id' });
});


module.exports = router;