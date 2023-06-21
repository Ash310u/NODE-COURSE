// CRUD - create read update delete  - - ->
// using destructuring in require('mongodb') object
const { ObjectID, MongoClient }=  require('mongodb');

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);

    db.collection('users').findOne(
        {name:'Ash'},
        (error,users) => {
            if (error) {
                return console.log('Unable to fecth');
            }

            console.log(users);
        }
    )
})