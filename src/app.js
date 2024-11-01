// app.js
'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');

//init middlewares
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init mongodb
require('./dbs/init.mongodb');

//init routes
const productRouter = require('./routes/product');

app.use('/v1/api', productRouter); 

//handle error
app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    return res.status(status).json({
        status: 'error',
        code: status,
        message: err.message || 'Internal Server Error'
    });
});

module.exports = app;
