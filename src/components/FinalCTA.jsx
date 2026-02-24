import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FinalCTA() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>

            {/* Background Animated Effect */}
            <motion.div
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'var(--gradient-ai)',
                    backgroundSize: '400% 400%',
                    opacity: 0.6,
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '4rem 0' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '4rem 3rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                            Ready to <span className="text-gradient">Scale?</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>
                            Leave your details below and we will get back to you with a custom strategy.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Phone Number</label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+91 98765 43210"
                                style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                style={{ width: '100%', padding: '1rem 1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem' }}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Submitting...' : 'Submit Now'}
                        </button>

                        {status === 'success' && (
                            <p style={{ textAlign: 'center', color: '#10b981', marginTop: '1rem' }}>Thanks! We've received your request.</p>
                        )}
                        {status === 'error' && (
                            <p style={{ textAlign: 'center', color: '#ef4444', marginTop: '1rem' }}>Something went wrong. Please try again.</p>
                        )}

                    </form>
                </motion.div>
            </div>
        </section>
    );
}
