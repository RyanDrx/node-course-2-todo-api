//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo Db Server');
    }

    console.log('Connected to Mongo Db Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: 'false'
    // }, (err, result) => {

    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into Users collection (name,age,location)
    // db.collection('Users').insertOne({
    //     name: 'Ryan Dierickx',
    //     age: 27,
    //     location: 'Seattle'

    // }, (err, result) => {

    //     if (err) {
    //         return console.log('unable to insert User', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });


    db.close();
});