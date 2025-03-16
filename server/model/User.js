const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: String,
    email: String,
    password: String
});
const UserModel = mongoose.model("users", userSchema);
=======
	name: String,
	email: String,
	password: String
});
const UserModel = mongoose.model("User", userSchema);
>>>>>>> origin/main
module.exports = UserModel;