const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser:true
})

// User model - - >

// const User = mongoose.model('User',{
//     name:{
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me = new User({
//     name:'Ash',
//     age:19
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((err) => {
//     console.log(err);
// });

// Tasks model - - >

const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task = new Task({
    description:'Do a commit',
    completed:false
})

task.save().then(() => {
    console.log(task);
}).catch((err) => {
    console.log(err);
});