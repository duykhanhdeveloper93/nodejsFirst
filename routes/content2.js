const express = require('express');

const { route } = require('express/lib/application');

const routerContent2 = express.Router();

const controller = require('../controller/web/controller');
const router = express.Router();

routerContent2.get('/content2', function (req, res) {
    res.send('hello content2');
})

routerContent2.get('/content3', function (req, res) {
    res.send('hello content3');
})

routerContent2.get('/content/:age-:gender', function (req, res) {
    res.send(req.params.age);
})

routerContent2.get('/content/*', function (req, res) {
    res.send('HIHIHIHI *');
})

routerContent2.get('/multi-function', func1, [func1, func2]);

function func1(req, res, next) {
    console.log('function1');
    next();
}

routerContent2.get('/xnxx',controller.getIndex);

function func2(req, res, next) {
    console.log('function2');

}

module.exports.routerContent2 = routerContent2;