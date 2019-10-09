const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.Promise = global.Promise;

// mongodb+srv://omnistack:omnistack@cluster0-gr6r3.mongodb.net/admin?retryWrites=true&w=majority
// mongoose.connect('mongodb://localhost/semana09', {
mongoose.connect('mongodb://localhost/semana09', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Erro ao conectar! " + err);
})

const connectedUser = {};
io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUser[user_id] = socket.id
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUser = connectedUser;

    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

server.listen(3333);

