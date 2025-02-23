import React, { useState} from 'react'
import { Grid, Paper, TextField, Typography, Button, Link } from '@mui/material';

export default function Login() {
	const [formData, setFormData] = useState({});
	const handleLogin = () => {
		console.log('Form Data', formData);
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
						<TextField style={row} id="standard-basic" label="Email" variant="standard" type='email' name="email" onChange={onChange} required/>
						<TextField style={row} id="standard-basic" label="Password" variant="standard" type='password' name="password" onChange={onChange} required/>
						<Button style={row} type="submit" variant="contained">Submit</Button>
					</form>
					<p>New User?<Link href="/signup"> Register</Link></p>
				</Paper>
			</Grid>
		</div>
	)
}
