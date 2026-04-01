import { getDb } from '@/lib/firebase-admin';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { password } = req.query;

    if (password !== process.env.ADMIN_PASSWORD) {
        console.log('[Admin] Bad password attempt');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const db = getDb();

    if (!db) {
        console.error('[Admin] Firestore not available — check Firebase env vars');
        return res.status(503).json({
            message: 'Database not configured',
            hint: 'Check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY in your environment variables'
        });
    }

    try {
        const snapshot = await db.collection('leads').orderBy('createdAt', 'desc').get();
        const leads = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(`[Admin] Fetched ${leads.length} leads`);
        res.status(200).json(leads);
    } catch (error) {
        console.error('[Admin] Firestore fetch error:', error.message);
        // Common error: Firestore database not created yet
        if (error.message?.includes('NOT_FOUND') || error.message?.includes('5 NOT_FOUND')) {
            return res.status(503).json({
                message: 'Firestore database not created yet',
                hint: 'Go to Firebase Console → Firestore Database → Create database'
            });
        }
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
