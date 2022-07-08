var express = require('express');
var router = express.Router();
var  Api= require('../controller/PopularSearch');
var api = new Api().getInstance();
//var api = require("../model/geoLocations")

router.get('/', async function(req, res) {
    
    const response = await api.getMostPopularSearch();
    console.log(response)
    res.send(response);
  //  res.sendStatus(response.status);
    
});

module.exports = router;