const { ObjectID } = require("mongodb");
const { Todo } = require("./../../models/todos");
const { User } = require("./../../models/users");
const jwt = require("jsonwebtoken");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const todos = [
  {
    _id: new ObjectID(),
    text: "First Test Todo",
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: "Second Test Todo",
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
];

const users = [
  {
    _id: userOneId,
    email: "kunal@example.com",
    password: "userOnePass",
    tokens: [
      {
        access: "auth",
        token: jwt
          .sign(
            { _id: userOneId.toHexString(), access: "auth" },
            process.env.JWT_SECRET
          )
          .toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: "json@example.com",
    password: "userTwoPass",
    tokens: [
      {
        access: "auth",
        token: jwt
          .sign(
            { _id: userTwoId.toHexString(), access: "auth" },
            process.env.JWT_SECRET
          )
          .toString()
      }
    ]
  }
];

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
};

const populateUsers = done => {
  User.remove({})
    .then(() => {
      var userOne = new User(users[0]).save();
      var userTwo = new User(users[1]).save();

      return Promise.all([userOne, userTwo]);
    })
    .then(() => done());
};

module.exports = { todos, populateTodos, populateUsers, users };
