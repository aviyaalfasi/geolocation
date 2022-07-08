var geoLocations = require("../model/geoLocations")
var distance = require('google-distance');
class getGeoLocationsDistance{
    //check if the location are a valid towns.
    getDistance(location1, location2){
        var result;
        try {
            result = geoLocations.getAll(location1, location2);
        }
        catch (err) {console.log(`failed ${err}`)};
        if (geoLocations.distance) return geoLocations.distance;
        //call to api
        //save to db
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new getGeoLocationsDistance();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
  }
  module.exports = Singleton;