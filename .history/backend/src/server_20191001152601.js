const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gr6r3.mongodb.net/Semana09?retryWrites=true&w=majority', {
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

