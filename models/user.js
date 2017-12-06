const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    user: {
      bnetId: String,
      battletag: String
    }
});

mongoose.model("users", UserSchema);
