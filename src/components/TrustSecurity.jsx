import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const trustPoints = [
    "Secure campaign management",
    "Data tracking & analytics",
    "Clear reporting dashboard",
    "No hidden costs"
];

export default function TrustSecurity() {
    return (
        <section className="section" style={{ background: 'var(--background)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                            <ShieldCheck size={32} />
                        </div>
                    </div>

                    <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
                        Built With <span className="text-gradient">Transparency & Performance</span> in Mind
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid var(--border)',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", bounce: 0.6, delay: 0.3 + (index * 0.1) }}
                                style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" color="white">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </motion.div>
                            <motion.span
                                whileHover={{ scale: 1.05, color: '#2563eb', textShadow: '0 0 10px rgba(37, 99, 235, 0.4)' }}
                                style={{ fontWeight: 500, fontSize: '1.05rem', cursor: 'default', display: 'inline-block' }}
                            >
                                {point}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
