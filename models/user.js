const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: STRING,
    required: true
  },
  password: {
    type: STRING,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
