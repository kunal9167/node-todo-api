// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb server" + err);
  }
  console.log("Conneted to MongoDB server");

  // db
  //   .collection("Todos")
  //   .find({ _id: new ObjectID("5a50f603ede59d0998d1abdc") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch Todos");
  //     }
  //   );

  // db
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos count:${count}`);
  //       // console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch Todos");
  //     }
  //   );

  db
    .collection("Users")
    .find({ name: "Kunal" })
    .toArray()
    .then(res => {
      console.log(JSON.stringify(res, undefined, 2));
    });

  // db.close();
});
