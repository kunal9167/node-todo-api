const { ObjectID } = require("mongodb");
const { Todo } = require("./../../models/todos");

const todos = [
  {
    _id: new ObjectID(),
    text: "First Test Todo"
  },
  {
    _id: new ObjectID(),
    text: "Second Test Todo",
    completed: true,
    completedAt: 333
  }
];

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
};

module.exports = { todos, populateTodos };
