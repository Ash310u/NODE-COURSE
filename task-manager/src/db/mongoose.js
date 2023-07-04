const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true
})

// User model - - >

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

// const me = new User({
//     email: 'Morty137@gmail.com',
//     name: 'Morty',
//     age: 14,
//     password: '1234'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((err) => {
//     console.log(err);
// });

// Tasks model - - >

const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const task = new Task({
    description:`              Wake up at 6 o'clock`,
})

task.save().then(() => {
    console.log(task);
}).catch((err) => {
    console.log(err);
});