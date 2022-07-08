var express = require('express');
var router = express.Router();
//var  Api= require('../controller/getLocationsDistance');
//var api = new Api().getInstance();

router.get('/', async function(req, res) {
   // api.getDistance('jerusalem', 'telaviv');
    res.sendStatus(201);
});

router.post('/', function(req, res) {
    
});

module.exports = router;