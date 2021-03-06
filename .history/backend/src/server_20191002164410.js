const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/semana09', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Erro ao conectar! " + err);
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

