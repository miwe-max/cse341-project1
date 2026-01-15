const { Router } = require('express');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

module.exports = routes;
