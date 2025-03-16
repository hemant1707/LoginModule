import { useLocation } from 'react-router-dom';

export default function Home() {
	const location = useLocation();
	const user = location.state?.user;

	

	return (
		<center>
			<h1>Welcome, {user && user.name}!</h1>
			<p>Email: {user && user.email}</p>
		</center>
	);
}
