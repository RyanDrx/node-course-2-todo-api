const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo Db Server');
    }

    console.log('Connected to Mongo Db Server');

    db.collection('Todos').find({
        _id: new ObjectID("586e780f3e415e13f86ba785")
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    }, err => {
        console.log('unable to fetch Todos', err)
    });


    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);  
    }, err => {
        console.log('unable to fetch Todos', err)
    });

    
    db.collection('Users').find({
        name: 'Ryan Dierickx'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2))
    }, err => {
        console.log('unable to fetch users', err)
    });

    // db.close();
});