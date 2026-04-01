import { db } from '@/lib/firebase-admin';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { password } = req.query;

    if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const snapshot = await db.collection('leads').orderBy('createdAt', 'desc').get();
        const leads = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        res.status(200).json(leads);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
