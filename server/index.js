const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bycrypt = require('bcrypt');
const UserModel  = require("./model/User")

const app = express();
app.use(express.json());
app.use(cors());
console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('mongo connected successfully'))
	.catch((err) => console.log(err))
app.listen(process.env.PORT, () => {
	console.log('server is running on port', process.env.PORT);
})
app.post('/signup', async (req, res) => {
	try {
		const {
			name,
			email,
			password
		} = req.body;
		console.log(name);
		console.log(email);
		console.log(password);
		const existingUser = await UserModel.findOne({
			email: email
		});
		if (existingUser) {
			return res.status(400).json({
				error: 'User already exist'
			})
		}else{
			const pwd = await bycrypt.hash(password, 10);
			const newUser = new UserModel({name, email, password:pwd});
			const savedUser = await newUser.save();
			res.status(200).json(savedUser);
		}
	} catch (err) {
		res.status(500).json({
			error: err.message
		})
	}
})