var geoLocations = require("../model/geoLocations")

class PopularSearch{
    getMostPopularSearch(){
        var result;
        try {
            result = geoLocations.getMostPopularSearch(location1, location2);
            return result;
        }
        catch (err) {console.log(`failed ${err}`)};
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new PopularSearch();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
  }
  module.exports = Singleton;