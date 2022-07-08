var express = require('express');
var router = express.Router();
var api = require("../model/geoLocations")

router.post("/",  async function(req, res){
    let newPair = {
        location1:req.body.source,
        location2:req.body.destination,
        distance: req.body.distance
    };
    await api.addNewPair(newPair);
});