'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
/**
 * User Schema
 */
var UserSchema = new Schema({

    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName:{
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    passwordHash:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = function (password){

    return bcrypt.compareSync(password, this.passwordHash);
}
mongoose.model('User', UserSchema);