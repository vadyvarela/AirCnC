const express = require('express');

const routes = express.Routes();

app.post('/users', (req, res) => {
    return res.json(req.body);
})