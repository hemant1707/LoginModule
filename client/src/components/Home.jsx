import { useLocation } from 'react-router-dom';

export default function Home() {
	const location = useLocation();
	const user = location.state?.user;

	if (!user) {
		return <p>No user data found. Please log in again.</p>;
	}

	return (
		<div>
			<h1>Welcome, {user.name}!</h1>
			<p>Email: {user.email}</p>
		</div>
	);
}
