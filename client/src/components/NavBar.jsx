import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'

export default function NavBar() {
	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography variant="h5" sx={{flexGrow:1}}> Login/Registration Form</Typography>
					<Button variant="contained" to ="/login" component={Link}>Login</Button>
					<Button variant="contained" to="/logout" component={Link}>Logout</Button>
					<Button variant="contained" to="/signup" component={Link}>Signup</Button>
				</Toolbar>
			</AppBar>
		</>
	)
}
