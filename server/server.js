var express = require("express");
var bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todos");
var { User } = require("./models/users");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

// app.post("/user", (req, res) => {
//   var user = new User({
//     email: req.body.email
//   });
//   user.save().then(
//     doc => {
//       res.send(doc);
//     },
//     err => {
//       res.status(400).send(err);
//     }
//   );
// });

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id)
    .then(todos => {
      if (todos) {
        // console.log(JSON.stringify(todos, undefined, 2));
        res.send(todos);
      } else {
        res.status(404).send();
      }
    })
    .catch(e => res.status(400));
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});

module.exports = {
  app
};
