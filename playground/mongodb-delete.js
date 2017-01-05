const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo Db Server');
    }

    console.log('Connected to Mongo Db Server');

    //delete many
    // db.collection('Users').deleteMany({name: 'Ryan Dierickx'}).then((result)=>{
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("586d507a9dbdaa121421e679")}).then((result)=>{
        console.log(result);
    });
    // db.close();
});