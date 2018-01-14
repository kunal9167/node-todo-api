const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todos");
const { User } = require("./../server/models/users");

var id = "5a5a470f734d1d347182f0d5";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

Todo.find().then(todos => {
  console.log("Todos", todos);
});
//
// Todo.findOne({
//   _id: id
// }).then(todos => {
//   console.log("Todo", todos);
// });

// Todo.findById(id)
//   .then(todos => {
//     if (!todos) return console.log("ID not found");
//     console.log("Todo by ID", todos);
//   })
//   .catch(e => console.log(""));

User.findById("5a5aee327709f32711688b2c").then(
  users => {
    console.log(JSON.stringify(users, undefined, 2));
  },
  e => console.log(e)
);
