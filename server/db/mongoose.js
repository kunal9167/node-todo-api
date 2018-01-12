var mongoose = require("mongoose");
//const { MongoClient, ObjectID } = require("mongodb");
const { mongoURI } = require("../../config/keys");
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);

module.exports = {
  mongoose
};
