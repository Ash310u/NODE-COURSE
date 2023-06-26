const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser:true
})

const User = mongoose.model('User',{
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const me = new User({
    name:'Ash',
    age:19
})

me.save().then(() => {
    console.log(me);
}).catch((err) => {
    console.log(err);
});