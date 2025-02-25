import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const userCookie = cookies.get('auth');
    const user = userCookie ? JSON.parse(userCookie) : null;

    return { user };
};
