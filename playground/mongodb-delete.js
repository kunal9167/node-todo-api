// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb server" + err);
  }
  console.log("Conneted to MongoDB server");

  //deleteMany
  db
    .collection("Users")
    .deleteMany({ name: "Kunal" })
    .then(result => {
      console.log(result);
    });
  //deleteOne
  // db
  //   .collection("Todos")
  //   .deleteOne()
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOneAndDelete
  db
    .collection("Users")
    .findOneAndDelete({ _id: 123 })
    .then(result => {
      console.log(result);
    });

  // db.close();
});
