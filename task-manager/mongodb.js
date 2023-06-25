// CRUD - create read update delete  - - ->
// using destructuring in require('mongodb') object
const { ObjectID, MongoClient } = require('mongodb');

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);

    // U - Update

    // using UpdateOne -->
    db.collection('users').updateOne(
        { _id: ObjectID('6490b64931d155603859fac4') }, // Filter
        {
            // by using $inc i can increment or decrement any number
            $inc: {
                age: 6
            }
        } // Update
    )
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    
})