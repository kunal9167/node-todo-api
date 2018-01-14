var express = require("express");
var bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todos");
var { User } = require("./models/users");
var app = express();
const port = process.env.PORT || 3000;

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

  // Invalid Object ID
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id)
    .then(todos => {
      if (todos) {
        // console.log(JSON.stringify(todos, undefined, 2));
        res.send(todos);
      } else {
        // ID not found
        res.status(404).send();
      }
    })
    .catch(e => res.status(400));
});

app.listen(port, () => {
  console.log(`Started on ${port}`);
});

module.exports = {
  app
};
