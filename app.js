const express = require('express');
require("dotenv").config();
const  mongoose  = require('mongoose');

const helloRouter = require('./routes/hello');
const geoDistanceRouter = require('./routes/distance');
const popularSearchRouter = require('./routes/popularSearch');
const healthRouter = require("./routes/health")

const app = express();

const PORT = 8081;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true});
const c = mongoose.connection;
c.once('open', () => {
    console.log("Connected to db;)");
});

app.use('/hello', helloRouter);
app.use('/distance', geoDistanceRouter)
app.use('/popularsearch', popularSearchRouter)
app.use('/health', healthRouter)

app.listen(PORT, ()=>{console.log('listening in port ', PORT);});