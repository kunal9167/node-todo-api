var mongoose = require("mongoose");
mongoose.promise = global.promise;

const { mongoURI } = require("../../config/keys");
// mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
