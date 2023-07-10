const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
})

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
