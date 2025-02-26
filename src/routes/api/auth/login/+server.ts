import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { username, password } = await request.json();

	// This is a simple validation - in a real app, you would check against a database
	const validUser = {
		username: 'agus123',
		password: 'handless'
	};

	if (username === validUser.username && password === validUser.password) {
		// Create a user object - this would typically include more info in a real app
		const user = { username };

		// Set auth cookie
		// Cookie options:
		// - path: '/' makes the cookie available across the entire site
		// - httpOnly: false allows JavaScript to read the cookie (needed for client-side auth checks)
		// - secure: should be true in production (requires HTTPS)
		// - maxAge: cookie expiration time in seconds (7 days in this example)
		// - sameSite: 'strict' prevents the cookie from being sent in cross-site requests
		cookies.set('auth', JSON.stringify(user), {
			path: '/',
			httpOnly: false, // For simplicity - make true in production for security
			secure: false,   // For simplicity - make true in production with HTTPS
			maxAge: 60 * 60 * 24 * 7, // 7 days
			sameSite: 'lax'  // Balance between security and usability
		});

		return json({
			success: true,
			message: 'Login successful!',
			user
		});
	} else {
		return json(
			{ success: false, message: 'Invalid credentials' },
			{ status: 401 }
		);
	}
};
