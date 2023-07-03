const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser:true
})

// User model - - >

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true 
    },
    age:{
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error ('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name:'Rick',
    age: -90
})

me.save().then(() => {
    console.log(me);
}).catch((err) => {
    console.log(err);
});

// Tasks model - - >

// const Task = mongoose.model('Task',{
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// })

// const task = new Task({
//     description:'Do a commit',
//     completed:false
// })

// task.save().then(() => {
//     console.log(task);
// }).catch((err) => {
//     console.log(err);
// });