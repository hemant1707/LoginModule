import {useState} from 'react'
import { Grid, Paper, TextField, Typography, Button, Link } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import axios from "axios";

export default function Signup() {
	const [formData, setFormData]=useState({});
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3001/signup",formData)
		.then((res)=>{
			console.log(res);
			if(res.status == 200){
				navigate("/login");
			} 
		})
		.catch((err)=>{
			let res = err.response;
			if (res.status && res.status == 400) {
				window.alert("User Already Exists!");
			}else{
				console.log(err);
			} 
		});
		console.log('Form Data', formData);
	}
	const onChange = (e)=>{
		const {name, value} = e.target;
		setFormData((preData)=>({
			...preData,
			[name]:value
		}))
		console.log('Form Data', formData);
	}
	const row = { display: "flex", marginTop: "2rem", width:'90%' };	
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
					<Typography variant="h5"> Signup</Typography>
					<form onSubmit={handleSubmit}>
						<TextField style={row} id="standard-basic" label="Name" variant="standard" name="name" onChange={onChange} required/>
						<TextField style={row} id="standard-basic" label="Email" variant="standard" type='email' name="email" onChange={onChange} required/>
						<TextField style={row} id="standard-basic" label="Password" variant="standard" type='password' name="password" onChange={onChange} required/>
						<Button style={row} type="submit" variant="contained">Submit</Button>
					</form>
					<p>Already have an account?<Link href="/login"> Login</Link></p>
				</Paper>
			</Grid>
		</div>
	)
}
