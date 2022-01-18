var express = require('express');
var router = express.Router();

const client = require('prom-client')

const register = new client.Registry(); 

client.collectDefaultMetrics({register});


/* GET metrics */
router.get('/', async(req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.send(await register.metrics());
});

module.exports = router;

