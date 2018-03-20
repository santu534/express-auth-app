'use strict';
module.exports  = function(app){
var express = require('express');
var userHandlers = require('./routehandlers/user.controller');

    /**
     * User Registration
     */
    app.route('/register')
    .post(userHandlers.signup);

    /**
     * User login
     */
    app.route('/login')
    .post(userHandlers.login);

     /**
     * Forgot password
     */
    app.route('/forgot-password')
    .post(userHandlers.forgotPassword);

}