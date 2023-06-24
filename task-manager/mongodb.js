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


        db.collection('users').updateOne(         
                {"_id": ObjectID('6490b64931d155603859fac4')}, // Filter
                {$set:{"name": 'andrew'}} // Update
            )
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
})