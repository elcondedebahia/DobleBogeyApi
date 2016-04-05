var express = require('express');
var app = express();
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/torneo/:torneoId', function (req, res) {
    res.json({ message: 'todas las fechas de este torneo' });
});

router.get('/torneo/:torneoId/fecha/:fechaId', function (req, res) {
    res.json({ message: 'resultados de fechaId de este torneo' });
});


module.exports = router;
