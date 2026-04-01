const admin = require('firebase-admin');
const dotenv = require('dotenv');
const path = require('path');

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

async function testFirebase() {
    console.log('--- Testing Firebase Connection ---');
    console.log('Project ID:', process.env.FIREBASE_PROJECT_ID);

    if (!admin.apps.length) {
        try {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                }),
            });
            console.log('✅ Firebase Admin Initialized Successfully');
            
            const db = admin.firestore();
            console.log('⏳ Attempting to access Firestore...');
            
            // Try to list collections (requires minimal permissions)
            const collections = await db.listCollections();
            console.log('✅ Firestore Connection Stable!');
            console.log('Found collections:', collections.map(c => c.id).join(', ') || 'None (ready to create)');
            
            process.exit(0);
        } catch (error) {
            console.error('❌ Firebase Error:', error.message);
            process.exit(1);
        }
    }
}

testFirebase();
