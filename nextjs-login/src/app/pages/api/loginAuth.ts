// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        console.log('Doing login auth');
        const { username, password } = req.body;

        // Simulate authentication logic (replace with actual authentication)
        if (username === 'user' && password === 'password') {
            const token = 'your_secret_token';
            const userData = {
                name: 'John Doe',
                email: 'johndoe@example.com',
            };

            res.status(200).json({ token, userData });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}