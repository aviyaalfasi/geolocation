const mongoose = require('mongoose');

class HealthMonitor{
    getHealthStatus(){
        if (mongoose.connection.readyState === 1) return 200;
        return 500;
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new HealthMonitor();
        }
    }
    getInstance() {
        return Singleton.instance;
    }
  }
  module.exports = Singleton;