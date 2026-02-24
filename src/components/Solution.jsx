import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const steps = [
    { title: "Strategy & Offer Alignment", desc: "We map out your best-performing angles." },
    { title: "AI Creative & Video Production", desc: "High-end assets without the production cost." },
    { title: "Campaign Launch", desc: "Setup on Meta & Google Ads." },
    { title: "Optimization & Tracking", desc: "Data-driven scaling and reporting." }
];

export default function Solution() {
    return (
        <section id="solution" className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Our Approach</span>
                    <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: '1rem 0' }}>
                        The RaginivoraAI <span className="text-gradient">Growth System</span>
                    </h2>
                    <AnimatedText
                        el="p"
                        text="A complete AI-powered advertising engine built for performance."
                        style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}
                    />
                </motion.div>

                <div style={{ position: 'relative' }}>
                    {/* Animated Connector Line via CSS */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                        style={{ position: 'absolute', left: '26px', top: '0', width: '2px', background: 'var(--gradient-glow)', zIndex: 0, boxShadow: '0 0 10px rgba(168,85,247,0.5)' }}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 1 }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 + (index * 0.2) }}
                                whileHover={{ x: 10 }}
                                style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', cursor: 'default' }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(168,85,247,0.5)' }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(10,10,10,0.8)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold', fontSize: '1.2rem', color: 'white', backdropFilter: 'blur(10px)' }}
                                >
                                    {index + 1}
                                </motion.div>
                                <div style={{ paddingTop: '0.5rem' }}>
                                    <h3 className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(168,85,247,0.3)' }}
                    style={{ marginTop: '5rem', background: 'linear-gradient(135deg, rgba(88,28,135,0.6), rgba(30,58,138,0.6))', padding: '2rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid rgba(168, 85, 247, 0.4)', backdropFilter: 'blur(10px)' }}
                >
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white' }}>Delivery in 48–72 Hours</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>From strategy to live campaigns, we move fast.</p>
                </motion.div>
            </div>
        </section>
    );
}
