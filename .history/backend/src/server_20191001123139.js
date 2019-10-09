const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: "Hello Vady Varela"});
})

app.listen(3333);