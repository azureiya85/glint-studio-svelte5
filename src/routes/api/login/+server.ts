import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { username, password } = await request.json();

	const validUser = {
		username: 'agus123',
		password: 'handless'
	};

	if (username === validUser.username && password === validUser.password) {
		// Set a cookie that expires in 7 days
		cookies.set('auth', JSON.stringify({ username }), {
			path: '/',
			httpOnly: false, // Set to `true` in production
			secure: false, // Set to `true` in production with HTTPS
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		return json({ success: true, message: 'Login successful!' });
	} else {
		return json({ success: false, message: 'Invalid credentials' }, { status: 401 });
	}
};
