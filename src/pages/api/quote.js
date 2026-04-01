import nodemailer from 'nodemailer';
import { getDb } from '@/lib/firebase-admin';

// ─── Firestore Save ─────────────────────────────────────────────────────────
async function saveToFirestore(data) {
    const db = getDb();
    if (!db) {
        console.warn('[Quote] Firebase not configured. Skipping Firestore save.');
        return null;
    }

    try {
        const timestamp = new Date().toISOString();
        const docRef = await db.collection('leads').add({
            ...data,
            createdAt: timestamp,
            status: 'New',
            notes: '',
        });
        return docRef.id;
    } catch (error) {
        console.error('[Quote] Firestore save error:', error.message);
        return null;
    }
}

// ─── Email Transporter ──────────────────────────────────────────────────────
function createTransporter() {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: { rejectUnauthorized: false },
    });
}

// ─── Owner Notification HTML ─────────────────────────────────────────────────
function ownerEmailHtml(data, leadId) {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Inter',system-ui,sans-serif;color:#f5f5f5;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    
    <div style="background:linear-gradient(135deg,#581c87,#1e3a8a);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <h1 style="margin:0;font-size:24px;font-weight:800;color:#fff;letter-spacing:-0.5px;">
        🔥 New Project Inquiry
      </h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">
        Received via RaginivoraAI Studio
      </p>
    </div>

    <div style="background:#131313;border:1px solid #222;border-top:none;border-radius:0 0 16px 16px;padding:32px;">
      
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
        <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#a855f7,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0;">
          ${data.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div style="font-size:18px;font-weight:700;color:#fff;">${data.name}</div>
          <div style="font-size:13px;color:#a3a3a3;">${data.email} • ${data.phone}</div>
        </div>
      </div>

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:12px 16px;background:#1a1a1a;border-radius:8px 8px 0 0;border-bottom:1px solid #222;">
            <div style="font-size:11px;color:#a855f7;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Service Required</div>
            <div style="font-size:15px;font-weight:600;color:#fff;">${data.service}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#1a1a1a;border-bottom:1px solid #222;">
            <div style="font-size:11px;color:#3b82f6;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Budget Range</div>
            <div style="font-size:15px;font-weight:600;color:#fff;">${data.budget}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#1a1a1a;border-radius:0 0 8px 8px;">
            <div style="font-size:11px;color:#10b981;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Timeline</div>
            <div style="font-size:15px;font-weight:600;color:#fff;">${data.timeline}</div>
          </td>
        </tr>
      </table>

      <div style="background:#1a1a1a;border-radius:8px;padding:16px;margin-bottom:24px;">
        <div style="font-size:11px;color:#f59e0b;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Project Description</div>
        <div style="font-size:14px;color:#d4d4d4;line-height:1.6;">${data.description || 'No description provided.'}</div>
      </div>

      <div style="text-align:center;margin-top:28px;">
        <a href="mailto:${data.email}?subject=Re: Your Project Inquiry - RaginivoraAI Studio&body=Hi ${data.name},%0A%0AThank you for reaching out..."
           style="display:inline-block;background:linear-gradient(135deg,#a855f7,#3b82f6);color:#fff;text-decoration:none;padding:14px 32px;border-radius:999px;font-weight:700;font-size:15px;margin-bottom:12px;">
          ✉️ Reply to ${data.name}
        </a>
        <p style="margin:16px 0 0;font-size:12px;color:#525252;">
          View this lead in your <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin" style="color:#a855f7;text-decoration:none;">Admin Dashboard</a> (ID: ${leadId})
        </p>
      </div>

    </div>
  </div>
</body>
</html>`;
}

// ─── Client Auto-Reply HTML ──────────────────────────────────────────────────
function clientEmailHtml(name, service) {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Inter',system-ui,sans-serif;color:#f5f5f5;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">

    <div style="background:linear-gradient(135deg,#581c87,#1e3a8a);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
      <div style="font-size:42px;margin-bottom:12px;">🚀</div>
      <h1 style="margin:0;font-size:26px;font-weight:900;color:#fff;letter-spacing:-0.5px;">
        We got your request, ${name}!
      </h1>
      <p style="margin:12px 0 0;color:rgba(255,255,255,0.75);font-size:15px;line-height:1.5;">
        Thank you for choosing RaginivoraAI Studio.<br/>Our team is already reviewing your inquiry.
      </p>
    </div>

    <div style="background:#131313;border:1px solid #222;border-top:none;border-radius:0 0 16px 16px;padding:36px;">
      
      <p style="color:#d4d4d4;font-size:15px;line-height:1.7;margin:0 0 24px;">
        We've received your inquiry for <strong style="color:#a855f7;">${service}</strong>. 
        A member of our team will personally reach out to you <strong style="color:#fff;">within 24 hours</strong> to discuss your project in detail and provide a custom proposal.
      </p>

      <div style="border-left:3px solid #a855f7;padding:16px 20px;background:#1a1a1a;border-radius:0 8px 8px 0;margin-bottom:28px;">
        <p style="margin:0;font-size:14px;color:#a3a3a3;line-height:1.6;">
          While you wait, feel free to browse our work or reach out directly at<br/>
          <a href="mailto:raginivoraai@gmail.com" style="color:#a855f7;text-decoration:none;font-weight:600;">raginivoraai@gmail.com</a>
        </p>
      </div>

      <div style="display:grid;gap:12px;margin-bottom:28px;">
        <div style="background:#1a1a1a;border-radius:8px;padding:14px 16px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">⚡</span>
          <div>
            <div style="font-size:13px;font-weight:600;color:#fff;">Fast Turnaround</div>
            <div style="font-size:12px;color:#737373;">Response guaranteed within 24 hours</div>
          </div>
        </div>
        <div style="background:#1a1a1a;border-radius:8px;padding:14px 16px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">🎯</span>
          <div>
            <div style="font-size:13px;font-weight:600;color:#fff;">Custom Proposal</div>
            <div style="font-size:12px;color:#737373;">Tailored strategy built for your goals</div>
          </div>
        </div>
        <div style="background:#1a1a1a;border-radius:8px;padding:14px 16px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">🔒</span>
          <div>
            <div style="font-size:13px;font-weight:600;color:#fff;">100% Confidential</div>
            <div style="font-size:12px;color:#737373;">Your project details stay private</div>
          </div>
        </div>
      </div>

      <div style="text-align:center;padding-top:20px;border-top:1px solid #222;">
        <div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:4px;">RaginivoraAI Studio</div>
        <div style="font-size:12px;color:#525252;text-transform:uppercase;letter-spacing:2px;">Design • Development • AI</div>
      </div>

    </div>
  </div>
</body>
</html>`;
}

// ─── Main Handler ────────────────────────────────────────────────────────────
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, service, budget, timeline, description } = req.body;

    if (!name || !email || !phone || !service) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    let leadId = null;

    // 1. Save to Firestore
    try {
        leadId = await saveToFirestore({ name, email, phone, service, budget, timeline, description });
    } catch (dbErr) {
        console.error('Database error:', dbErr.message);
    }

    // 2. Send Emails
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log('--- NEW QUOTE SUBMISSION ---');
        console.log({ name, email, phone, service, budget, timeline, description, leadId });
        console.warn('SMTP not configured. Emails not sent.');
        return res.status(200).json({ message: 'Received (emails simulated)', leadId });
    }

    try {
        const transporter = createTransporter();

        // Send both emails in parallel
        await Promise.all([
            // To owner
            transporter.sendMail({
                from: `"RaginivoraAI Studio" <${process.env.SMTP_USER}>`,
                to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
                subject: `🔥 New ${service} Inquiry from ${name}`,
                html: ownerEmailHtml({ name, email, phone, service, budget, timeline, description }, leadId),
            }),
            // Auto-reply to client
            transporter.sendMail({
                from: `"RaginivoraAI Studio" <${process.env.SMTP_USER}>`,
                to: email,
                subject: `We've received your inquiry, ${name}! 🚀`,
                html: clientEmailHtml(name, service),
            }),
        ]);

        res.status(200).json({ message: 'Quote submitted successfully', leadId });
    } catch (emailErr) {
        console.error('Email error:', emailErr.message);
        res.status(200).json({ message: 'Lead saved but email failed', leadId });
    }
}
