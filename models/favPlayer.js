const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FavPlayerSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  role: String,
  stats: String
});

mongoose.model("favPlayer", FavPlayerSchema);
