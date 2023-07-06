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

    // D - Delete

    // using deleteMany to delete multiple docs
    db.collection('users').deleteMany({
        age:22
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

    // using deleteOne to delete single doc
    db.collection('tasks').deleteOne({
        completed:true,
    }).then((result) => {
      console.log(result.deletedCount);  
    }).catch((err) => {
        console.log(err);
    });
})