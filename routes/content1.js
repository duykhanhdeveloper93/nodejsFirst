const express = require('express');

const routerContent1 = express.Router();

routerContent1.get('/content1',function(req, res) {
    res.send('hello content1');
})

module.exports.routerContent1 = routerContent1;