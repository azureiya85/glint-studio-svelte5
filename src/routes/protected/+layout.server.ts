import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, parent }) => {
	// Get auth cookie
	const authCookie = cookies.get('auth');

	// If no auth cookie exists, redirect to login
	if (!authCookie) {
		// 302 status is a temporary redirect
		throw redirect(302, '/login');
	}

	// Parse the user data from the cookie
	const user = JSON.parse(authCookie);

	// Data from parent layouts is accessible by loading it
	const parentData = await parent();

	// Return user data to be available in protected routes
	return {
		user,
		// Merge with parent data if needed
		...parentData
	};
};
