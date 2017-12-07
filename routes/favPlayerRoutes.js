const mongoose = require("mongoose");
const FavPlayer = mogoose.model("favPlayer");
module.exports = app => {
	app.post('/api/favorite_players', requireLogin, async (req, res) =>{
  	const { name, role, stats } = req.body;
  }
}
