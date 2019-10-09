const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;

// mongodb+srv://omnistack:omnistack@cluster0-gr6r3.mongodb.net/admin?retryWrites=true&w=majority
// mongoose.connect('mongodb://localhost/semana09', {
mongoose.connect('mongodb://omnistack:omnistack@cluster0-gr6r3.mongodb.net/admin?retryWrites=true&w=majority', {
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

