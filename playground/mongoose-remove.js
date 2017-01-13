const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findOneAndRemove({_id:'58784b7b4caecb89ef9d2016'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('58784b7b4caecb89ef9d2016').then((todo)=>{
    console.log(todo);
});