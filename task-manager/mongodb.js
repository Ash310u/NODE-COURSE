// CRUD - create read update delete  - - ->
// using destructuring in require('mongodb') object
const { ObjectID, MongoClient }=  require('mongodb');

console.log(ObjectID);


const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'
// using new because ObjectID is constructor function
const id = new ObjectID()

console.log(id);
console.log(id.id.length);
console.log(id.getTimestamp());
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);

    // adding a users collection --->

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

    // db.collection('users').insertMany([
    //     {
    //         name:'Ash',
    //         age:20
    //     },
    //     {
    //         name:'Yash',
    //         age:19
    //     },
    //     {
    //         name:'Andrew',
    //         age:34
    //     }
    // ],(error,result) => {
    //     if (error) {
    //         return console.log('Unble to insert users');
    //     }
    //     // result.ops this contains all of the documents that were inserted
    //     console.log(result.ops);
    // })

    // adding a tasks collection --->

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Do a commit today',
    //         completed:true,
    //     },
    //     {
    //         description:'Hit gym today',
    //         completed:false,
    //     },
    //     {
    //         description:'Learn somthing new today',
    //         completed:true,
    //     }
    // ],(error,result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks');
    //     }
    //     console.log(result.ops);
    // })



})