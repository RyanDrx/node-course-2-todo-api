const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const user1Id = new ObjectID().toHexString();
const user2Id = new ObjectID().toHexString();

const users = [{
    _id: user1Id,
    email: 'RyanD@test.com',
    password: 'testpassword',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id:user1Id,access:'auth'}, 'abc123').toString()
    }]
}, {
    _id: user2Id,
    email: 'test2@example.com',
    password: 'user2password',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id:user2Id,access:'auth'}, 'abc123').toString()
    }]
}]

const todos = [{
    _id: new ObjectID(),
    text: 'new todo 1',
    _creator: user1Id
}, {
    _id: new ObjectID(),
    text: 'new todo 2',
    complete: true,
    completeAt: 336728,
    _creator: user2Id
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done())
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var user1 = new User(users[0]).save();
        var user2 = new User(users[1]).save();

        return Promise.all([user1, user2]);
    }).then(() => done())
};

module.exports = { todos, populateTodos, users, populateUsers }