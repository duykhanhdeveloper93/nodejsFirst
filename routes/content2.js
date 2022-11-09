const express = require('express');

const routerContent2 = express.Router();

routerContent2.get('/content2',function(req, res) {
    res.send('hello content2');
})

routerContent2.get('/content3',function(req, res) {
    res.send('hello content3');
})

routerContent2.get('/content/:age-:gender',function(req, res) {
    res.send(req.params.age);
})

routerContent2.get('/multi-function',func1,[func1,func2]);

function func1(req, res , next) {
    console.log('function1');
    next();
}

function func2(req, res , next) {
    console.log('function2');
    
}

module.exports.routerContent2 = routerContent2;