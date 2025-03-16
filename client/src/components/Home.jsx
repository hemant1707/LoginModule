import React from 'react'
<<<<<<< HEAD
import { useLocation } from 'react-router-dom'

export default function Home() {
	const location = useLocation();
	const user = location.state?.user;
	return (
		<center>
			<h1 style={{ color: "white" }}>Welcome Home {user && user.name}</h1>
		</center>
=======

export default function Home() {
	return (
		<div>
			Home
		</div>
>>>>>>> origin/main
	)
}
