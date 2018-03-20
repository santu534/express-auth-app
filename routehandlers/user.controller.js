'use strict';
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const async = require('async');
let User = mongoose.model('User');

/**
 * User Signup
 * @param {*} req 
 * @param {*} res 
 */
function signup(req, res) {

  var newUser = new User(req.body);
  newUser.passwordHash = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.passwordHash = undefined;
      return res.json(user);
    }
  });
}
/**
 * User Login
 * @param {*} req 
 * @param {*} res 
 */
function login(req, res) {

  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({ message: 'Authentication success.', access_token: jwt.sign({ email: user.email, firstName: user.firstName, lastName: user.lastName, _id: user._id }, 'test') });
      }
    }
  });
};

/**
 * Forgot password
 * @param {*} req 
 * @param {*} res 
 */
function forgotPassword(req, res) {

  async.waterfall([
    function (done) {
      User.findOne({
        email: req.body.email
      }).exec(function (err, user) {
        if (user) {
          done(err, user);
        } else {
          done('User not found.');
        }
      });
    },
    function (user, done) {
      // create the random token
      crypto.randomBytes(5, function (err, buffer) {
        var token = buffer.toString('hex');
        done(err, user, token);
      });
    },
    function (user, token, done) {
      var newPassword = bcrypt.hashSync(token,10);
      User.findByIdAndUpdate({ _id: user._id }, { passwordHash: newPassword, reset_password_expires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function (err, new_user) {
        done(err, token, new_user);
      });
    },
    function (token, user, done) {
      return res.status(200).json({ message:"successfuly created token",access_token: token });
    }
  ], function (err) {
    return res.status(422).json({ message: err });
  });




}
exports.signup = signup;
exports.login = login;
exports.forgotPassword = forgotPassword;
