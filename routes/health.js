const express = require('express');
const router = express.Router();
const  Api = require('../controller/HealthMonitor');
const api = new Api().getInstance();

router.get('/', async function(req, res) {
    const status = api.getHealthStatus();
    res.sendStatus(status);
});

module.exports = router;