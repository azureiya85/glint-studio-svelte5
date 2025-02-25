import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const auth = cookies.get('auth');

	if (!auth) {
		throw redirect(302, '/login'); // Redirect all sub-pages to login
	}

	return { user: JSON.parse(auth) };
};
