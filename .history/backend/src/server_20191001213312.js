const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); /** caminho relativo do arquivo pontobarra para indicar que é um arquivo */

const app = express();

mongoose.connect('mongodb+srv://paulo145:paulo152536@ensino-vevx6.mongodb.net/ensino?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(3000); /**define a porta */