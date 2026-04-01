import { db } from '@/lib/firebase-admin';

export default async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id, status, notes, password } = req.body;

    if (password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!id) {
        return res.status(400).json({ message: 'Missing lead ID' });
    }

    try {
        const updateData = {};
        if (status) updateData.status = status;
        if (notes !== undefined) updateData.notes = notes;
        updateData.updatedAt = new Date().toISOString();

        await db.collection('leads').doc(id).update(updateData);

        res.status(200).json({ message: 'Lead updated successfully' });
    } catch (error) {
        console.error('Error updating lead:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
