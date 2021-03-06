const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-gr6r3.mongodb.net:27017,cluster0-shard-00-01-gr6r3.mongodb.net:27017,cluster0-shard-00-02-gr6r3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to database!");
})
.catch((error) => {
    console.log("Connection failed!", error);
});

app.use(express.json());
app.use(routes);

app.listen(3333);

