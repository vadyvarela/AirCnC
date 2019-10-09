const express = require('express');
//const mongoose = require('mongoose');
const routes = require('./routes');
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express();

/*mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gr6r3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/
const app = express();
app.use(express.json());

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

require('./routes')(app);

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Servidor iniciado na port: ', ${config.port}`)
  })

