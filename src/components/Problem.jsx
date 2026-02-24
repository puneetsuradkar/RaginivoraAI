import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import AnimatedText from './AnimatedText';

const problems = [
    "High production costs",
    "Agencies too expensive",
    "No in-house marketing team",
    "Ads don’t convert",
    "No tracking or performance clarity"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -40, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { type: "spring", stiffness: 120, damping: 14 }
    }
};

export default function Problem() {
    return (
        <section className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring" }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
                        Why Most Small Brands <span style={{ color: '#ef4444', textShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}>Fail</span> at Advertising
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.01)',
                        padding: '3rem',
                        borderRadius: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1.25rem 1.5rem',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                cursor: 'default',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            <motion.div
                                initial={{ rotate: -90, scale: 0 }}
                                whileInView={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", delay: 0.4 + (index * 0.1) }}
                            >
                                <XCircle size={28} color="#ef4444" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))' }} />
                            </motion.div>
                            <motion.span
                                whileHover={{ scale: 1.05, color: '#ef4444', textShadow: '0 0 10px rgba(239, 68, 68, 0.4)' }}
                                style={{ fontSize: '1.15rem', fontWeight: 500, letterSpacing: '0.01em', cursor: 'default' }}
                            >
                                {problem}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
