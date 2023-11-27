require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todoRoutes = require('./routes/todoRoutes');
const usersRouter = require('./routes/userRoutes');
const {errorHandler} = require("././middleware/errorMiddleware");

const connectDB = require('./config/db');
connectDB();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/todos/', todoRoutes);
app.use('/api/users/', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler call will be  in last
app.use(errorHandler);

module.exports = app;
