<<<<<<< HEAD
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SetIsloogedInContext } from '../App';
export default function Logout() {
	const navigate = useNavigate();
	const setIsloogedIn = useContext(SetIsloogedInContext);
	const handleLogout = async () => {
		await axios.post("http://localhost:3001/logout", { withCredentials: true }).then((res) => {
			if (res.status == 200) {
				setIsloogedIn(false);
				navigate('/login');
			} else {
				console.log(res.error);
			}
		}).catch((err) => {
			console.log(err);
		});
	}
	return (
		<div>
			<Button variant="contained" onClick={handleLogout}>Logout</Button>
		</div >
=======
import React from 'react'

export default function Logout() {
	return (
		<div>
			Logout
		</div>
>>>>>>> origin/main
	)
}
