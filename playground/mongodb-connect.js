// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb server" + err);
  }
  console.log("Conneted to MongoDB server");

  // db.collection("Todos").insertOne(
  //   {
  //     text: "Something Todo",
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log("Unable to insert TODO", err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // db.collection("Users").insertOne(
  //   {
  //     name: "Kunal",
  //     age: 19,
  //     location: "Mumbai"
  //   },
  //   (err, result) => {
  //     if (err) return console.log("Unable to insert TODO", err);
  //
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // );

  db.close();
});
