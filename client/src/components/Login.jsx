import { useState, useContext } from 'react';
import { Grid, Paper, TextField, Typography, Button, Link } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { SetIsloogedInContext } from '../App';

export default function Login() {
	const setIsloogedIn = useContext(SetIsloogedInContext);
	const [formData, setFormData] = useState({ email: '', password: '' });
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3001/login", formData, { withCredentials: true })
			.then(result => {
				if (result.status === 200) {
					axios.get('http://localhost:3001/user', { withCredentials: true })
						.then(response => {
							if (response.data.user) {
								setIsloogedIn(true);
								navigate("/home", { state: { user: response.data.user } });
							}
						});
				} else {
					alert("Login failed");
				}
			})
			.catch(err => console.log(err));
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

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
						<TextField style={row} label="Email" variant="standard" type='email' name="email" onChange={onChange} required />
						<TextField style={row} label="Password" variant="standard" type='password' name="password" onChange={onChange} required />

						<Button style={row} type="submit" variant="contained">Submit</Button>
					</form>
					<p>New User? <Link href="/signup"> Register</Link></p>
				</Paper>
			</Grid>
		</div>
	);
}
