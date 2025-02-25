import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete('auth', { path: '/' });

	return json({ success: true, message: 'Logged out successfully' });
};
