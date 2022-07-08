var geoLocations = require("../model/geoLocations")
var distance = require('google-distance');
class getGeoLocationsDistance{
    getDistance(location1, location2){
        var result;
        try {
            result = geoLocations.getAll(location1, location2);
            console.log("result ---> ", result.distance)
        }
        catch (err) {console.log(`failed ${err}`)};
        if (geoLocations.distance) return geoLocations.distance;
        let x = distance.get(
            {	
                origin: location1, 
                destination: location2
            }, 
            function(err, data) { 
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(data);
        });
        console.log("x----> ",x)

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