import admin from 'firebase-admin';

let db = null;

function getFirebaseApp() {
    if (admin.apps.length > 0) {
        return admin.apps[0];
    }

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
        console.error('[Firebase] Missing env vars:', {
            hasProjectId: !!projectId,
            hasClientEmail: !!clientEmail,
            hasPrivateKey: !!privateKey,
        });
        return null;
    }

    try {
        const app = admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
        console.log('[Firebase] Initialized successfully for project:', projectId);
        return app;
    } catch (error) {
        console.error('[Firebase] Init error:', error.message);
        return null;
    }
}

function getDb() {
    if (db) return db;
    const app = getFirebaseApp();
    if (!app) return null;
    try {
        db = admin.firestore();
        return db;
    } catch (e) {
        console.error('[Firebase] Firestore error:', e.message);
        return null;
    }
}

export { getDb };
export default admin;
