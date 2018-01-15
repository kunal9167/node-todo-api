const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todos");
const { User } = require("./../server/models/users");

var id = "5a5a470f734d1d347182f0d5";

Todo.remove({}).then(result => {
  console.log(result);
});

// Todo.findByIdAndRemove("5a5cd4e6af8bde520f982e80").then(result => {
//   console.log(result);
// });
