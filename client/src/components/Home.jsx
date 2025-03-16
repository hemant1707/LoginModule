import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
	const location = useLocation();
	const user = location.state?.user;
	return (
		<center>
			<h1 style={{ color: "white" }}>Welcome Home {user && user.name}</h1>
		</center>
	)
}
