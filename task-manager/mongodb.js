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

    // R - Read 
    // just finding one document using 'findOne'
    db.collection('users').findOne(
        { _id: new ObjectID('6490b64931d155603859fac3') },
        (error,user) => {
            if (error) {
                return console.log('Unable to fecth');
            }

            console.log(user);
        }
    )

    // finding multiple documents using 'find'
    // find require's a cursor method - like - toArray,count blah blah
    db.collection('users').find(
        { age:19 }
    ).toArray((error,users) => {
        console.log(users);
    })
    
    db.collection('users').find(
        { age:19 }
    ).count((error,count) => {
        console.log(count);
    })


    // using findOne in tasks collection
    db.collection('tasks').findOne(
            {_id: new ObjectID('6490b64931d155603859fac6')},
            (error,task) => {
                if (error) {
                    return console.log('Unable to fecth');
                }
                console.log(task);
            }
        )
    // using find in tasks collection
    db.collection('tasks').find(
            {completed:true}
        ).toArray((error,tasks) => {
            console.log(tasks);
        })
})