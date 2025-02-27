import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies, fetch }) => {
	const { username, password } = await request.json();

	try {
		// Try to authenticate with Backendless first
		// const BACKENDLESS_API_URL = 'https://api.backendless.com';
		const APP_ID = '97A8EFE3-6D77-492C-8376-2D3072C9B4B7'; // Replace with your Backendless App ID
		const API_KEY = '0A8BD422-473E-4240-85B4-8D51E8E60FE2'; // Replace with your Backendless API Key

		const backendlessResponse = await fetch(
			`https://api.backendless.com/97A8EFE3-6D77-492C-8376-2D3072C9B4B7/0A8BD422-473E-4240-85B4-8D51E8E60FE2/data/Users`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'application-id': APP_ID,
					'secret-key': API_KEY
				},
				body: JSON.stringify({
					login: username, // Backendless uses 'login' for username/email
					password: password
				})
			}
		);

		// If Backendless login succeeds, use that
		if (backendlessResponse.ok) {
			const userData = await backendlessResponse.json();

			// Create a user object with relevant info
			const user = {
				username: userData.username || username,
				email: userData.email,
				objectId: userData.objectId
			};

			// Set auth cookie
			cookies.set('auth', JSON.stringify(user), {
				path: '/',
				httpOnly: false, // For simplicity
				secure: false, // For simplicity
				maxAge: 60 * 60 * 24 * 7, // 7 days
				sameSite: 'lax'
			});

			return json({
				success: true,
				message: 'Login successful!',
				user
			});
		}

		// If Backendless fails but it's our test user, allow login
		const validUser = {
			username: 'admin', // Changed to 'admin' as requested
			password: 'handless'
		};

		if (username === validUser.username && password === validUser.password) {
			// Create a user object
			const user = { username };

			// Set auth cookie
			cookies.set('auth', JSON.stringify(user), {
				path: '/',
				httpOnly: false,
				secure: false,
				maxAge: 60 * 60 * 24 * 7, // 7 days
				sameSite: 'lax'
			});

			return json({
				success: true,
				message: 'Login successful!',
				user
			});
		}

		// If all authentication methods fail
		return json({ success: false, message: 'Invalid credentials' }, { status: 401 });
	} catch (error) {
		console.error('Login error:', error);

		return json({ success: false, message: 'Server error during login' }, { status: 500 });
	}
};
