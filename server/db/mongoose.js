var mongoose = require("mongoose");
//const { MongoClient, ObjectID } = require("mongodb");
mongoose.promise = global.promise;

const { mongoURI } = require("../../config/keys");
// mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp"
);

module.exports = {
  mongoose
};
