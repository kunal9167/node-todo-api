// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb server" + err);
  }
  console.log("Conneted to MongoDB server");

  // db
  //   .collection("Todos")
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID("5a51b49f1664d5586bdfa709")
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5a50f72fd11e4b1d98e869be")
      },
      {
        $set: {
          name: "Kunal Gupta"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  // db.close();
});
