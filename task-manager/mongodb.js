// CRUD - create read update delete

const mongodb = require('mongodb')

const MongoClient =  mongodb.MongoClient


const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);

    // insertOne it's allow us to insert a single document into a collection --> 

    // db.collection('users').insertOne({
    //     name : 'ash',
    //     age:19  
    // }, (error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert user'); 
    //     }

    //     // result.ops this contains all of the documents that were inserted
    //     console.log(result.ops);
    // } )

    // insertMany it's allow us to insert multiple document into a collection --> 
    // it's take a Array of Objects
    db.collection('users').insertMany([
        {
            name:'Ash',
            age:20
        },
        {
            name:'Yash',
            age:19
        },
        {
            name:'Andrew',
            age:34
        }
    ],(error,result) => {
        if (error) {
            return console.log('Unble to insert users');
        }
        // result.ops this contains all of the documents that were inserted
        console.log(result.ops);
    })



})