// CRUD - create read update delete

const mongodb = require('mongodb')

const MongoClient =  mongodb.MongoClient


const connectionURL = 'mongodb://localhost:27017/YourDB'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('its error');
    }
    console.log('connected');
})