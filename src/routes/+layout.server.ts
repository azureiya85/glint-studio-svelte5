import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    // Get the auth cookie and parse it
    const authCookie = cookies.get('auth');

    // If cookie exists, parse it into a user object
    // If not, user will be null (not authenticated)
    const user = authCookie ? JSON.parse(authCookie) : null;

    // This data will be available to all routes via data.user
    return { user };
};
