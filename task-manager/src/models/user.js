const mongoose = require('mongoose')
const validator = require("validator")

// In this file we are put the criteria for Users details and exports that
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        // by using trim true its remove spaces before and after string
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength:7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error(`Password cannot contain "password"`)
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports = User