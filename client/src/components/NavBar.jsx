<<<<<<< HEAD
import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import Logout from './Logout';
import { SetIsloogedInContext, IsloogedInContext } from '../App';

export default function NavBar() {
	const isloogedIn = useContext(IsloogedInContext);
	const setIsloogedIn = useContext(SetIsloogedInContext);
=======
import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {Link} from 'react-router-dom'

export default function NavBar() {
>>>>>>> origin/main
	return (
		<>
			<AppBar>
				<Toolbar>
<<<<<<< HEAD
					<Typography variant="h5" sx={{ flexGrow: 1 }}> Login/Registration Form</Typography>
					{!isloogedIn ?
						<>
							<Button variant="contained" to="/login" component={Link}>Login</Button>
							<Button variant="contained" to="/signup" component={Link}>Signup</Button>
						</>
						:
						<Logout />
					}
=======
					<Typography variant="h5" sx={{flexGrow:1}}> Login/Registration Form</Typography>
					<Button variant="contained" to ="/login" component={Link}>Login</Button>
					<Button variant="contained" to="/logout" component={Link}>Logout</Button>
					<Button variant="contained" to="/signup" component={Link}>Signup</Button>
>>>>>>> origin/main
				</Toolbar>
			</AppBar>
		</>
	)
}
