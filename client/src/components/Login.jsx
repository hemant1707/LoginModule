import { useState, useContext } from 'react'
import { Grid, Paper, TextField, Typography, Button, Link } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { SetIsloogedInContext } from '../App';

export default function Login() {
	const setIsloogedIn = useContext(SetIsloogedInContext);
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		console.log('Form Data', formData);
		axios.post("http://localhost:3001/login", formData, { withCredentials: true })
			.then((res) => {
				if (res.status == 200) {
					axios.get("http://localhost:3001/user", { withCredentials: true }).then((res) => {
						if (res.data.user) {
							console.log('User Data', res.data.user);
							setIsloogedIn(true);
							navigate('/home', { state: { user: res.data.user } });
						}
					}).catch((err) => {
						alert(err.message);
					})
				}
			}).catch((err) => {
				let res = err.response;
				if (res.status == 400) {
					alert("User does not exist!");
				} else {
					alert(err.message);
				}
			})

	}
	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((preData) => ({
			...preData,
			[name]: value
		}))
		console.log('Form Data', formData);
	}
	const row = { display: "flex", marginTop: "2rem", width: '90%' };

	return (
		<div>
			<Grid align="center">
				<Paper sx={{
					height: '60vh',
					width: {
						xs: '80vw',
						sm: '60vw',
						md: '40vw',
						lg: '20vw'
					}
				}}>
					<Typography variant="h5"> Login</Typography>
					<form onSubmit={handleLogin}>
						<TextField style={row} id="standard-basic" label="Email" variant="standard" type='email' name="email" onChange={onChange} required />
						<TextField style={row} id="standard-basic" label="Password" variant="standard" type='password' name="password" onChange={onChange} required />

						<Button style={row} type="submit" variant="contained">Submit</Button>
					</form>
					<p>New User?<Link href="/signup"> Register</Link></p>
				</Paper>
			</Grid>
		</div>
	)
}
