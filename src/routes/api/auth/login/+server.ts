import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies, fetch }) => {
    const { username, password } = await request.json();

    try {
        // Try to authenticate with Backendless first
        // const BACKENDLESS_API_URL = 'https://api.backendless.com';
        const APP_ID = '97A8EFE3-6D77-492C-8376-2D3072C9B4B7'; // Replace with your Backendless App ID
        const API_KEY = '0A8BD422-473E-4240-85B4-8D51E8E60FE2'; // Replace with your Backendless API Key

        const backendlessResponse = await fetch(
            `https://api.backendless.com/97A8EFE3-6D77-492C-8376-2D3072C9B4B7/0A8BD422-473E-4240-85B4-8D51E8E60FE2/users/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'application-id': APP_ID,
                    'secret-key': API_KEY
                },
                body: JSON.stringify({
                    login: username, // Backendless uses 'login' for username/email
                    password: password,
                    email: username
                })
            }
        );

        // If Backendless login succeeds, use that

        if (backendlessResponse.ok) {
            const userData = await backendlessResponse.json();

            const user = {
                username: userData.username || username,
                email: userData.email,
                objectId: userData.objectId
            };

            cookies.set('auth', JSON.stringify(user), {
                path: '/',
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 24 * 7, // 7 days
                sameSite: 'lax'
            });

            return json({ success: true, message: 'Login successful!', user });
        } else {
            const errorResponse = await backendlessResponse.text();
            console.error('Backendless auth failed:', backendlessResponse.status, errorResponse);
        }

        // Test user fallback
        const validUser = { username: 'admin', password: 'handless' };
        if (username === validUser.username && password === validUser.password) {
            const user = { username };

            cookies.set('auth', JSON.stringify(user), {
                path: '/',
                httpOnly: true,
                secure: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'lax'
            });

            return json({ success: true, message: 'Login successful!', user });
        }

        return json(
            { success: false, message: 'Invalid credentials. Please check your username and password.' },
            { status: 401 }
        );
    } catch (error) {
        console.error('Login error:', error);
        return json(
            { success: false, message: 'Server error during login. Please try again later.' },
            { status: 500 }
        );
    }
};
