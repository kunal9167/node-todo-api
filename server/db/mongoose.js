var mongoose = require("mongoose");
const {mongoURI}=require("../../config/keys");
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);

module.exports = {
  mongoose
};
