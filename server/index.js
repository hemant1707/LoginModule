const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bycrypt = require('bcrypt');
<<<<<<< HEAD
const UserModel = require("./model/User");
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('mongo connected successfully'))
    .catch((err) => console.log(err))
app.listen(process.env.PORT, () => {
    console.log('server is running on port', process.env.PORT);
})
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collection: 'sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.post('/signup', async(req, res) => {
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
        } else {
            const pwd = await bycrypt.hash(password, 10);
            const newUser = new UserModel({ name, email, password: pwd });
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})
app.post('/login', async(req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        const existingUser = await UserModel.findOne({
            email: email
        });
        if (existingUser) {
            const isMatch = await bycrypt.compare(password, existingUser.password);
            if (isMatch) {
                req.session.user = { 'id': existingUser._id, name: existingUser.name, email: existingUser.email };
                console.log('Inside login', req.session.user);
                res.status(200).json(existingUser);

            } else {
                res.status(400).json({
                    error: 'User does not exist'
                })
            }
        } else {
            res.status(401).json({
                error: 'Invalid Credentials'
            })
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
})
app.get('/user', (req, res) => {
    console.log(req.session);
    console.log('Inside user', req.session.user);
    if (req.session && req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
})
app.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            console.log('session', req.session);
            if (err) {
                res.status(400).json({ error: 'Logout failed' });
            } else {
                res.clearCookie('connect.sid');
                res.status(200).json({ message: 'Logout successful' });
            }
        });
        console.log('session', req.session);
    } else {
        res.status(500).json({ error: 'No session Found' });
    }

=======
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
>>>>>>> origin/main
})