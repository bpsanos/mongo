var mongoose = require("mongoose");

var schema = mongoose.schema;

var commentSchema = new schema({
  name: {
    type: String
  },
  body: {
    type: String,
    required: true
  }
});
var comment = mongoose.model("Comment", commentSchema);
module.exports = comment;
