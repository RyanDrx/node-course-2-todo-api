const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to Mongo Db Server');
    }

    console.log('Connected to Mongo Db Server');


    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("586fc2d796dc75baa552396f")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('586fc47896dc75baa55239a2')
    }, {
            $inc: {
                age: 1
            }, 
             $set: {
                name: 'Andy'
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
    // db.close();
});