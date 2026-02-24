import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const samples = [
    { id: 1, title: "D2C Skincare", category: "AI Video Ad" },
    { id: 2, title: "Fitness Tech", category: "AI Image Creative" },
    { id: 3, title: "Apparel Brand", category: "Dynamic Product Ad" },
    { id: 4, title: "Local Service", category: "Lead Generation Ad" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export default function SampleWork() {
    return (
        <section id="work" className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
                        See What <span className="text-gradient">AI-Powered Ads</span> Look Like
                    </h2>
                    <AnimatedText el="p" text="High-converting creatives, generated without photoshoots." style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }} />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
                >
                    {samples.map((work) => (
                        <motion.div
                            key={work.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -15,
                                scale: 1.03,
                                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.25)",
                                borderColor: "rgba(168, 85, 247, 0.5)"
                            }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative',
                                backdropFilter: 'blur(10px)',
                                transition: 'border-color 0.3s ease'
                            }}
                        >
                            {/* Image/Video placeholder with gradient hover overlay */}
                            <div
                                style={{
                                    aspectRatio: '4/5',
                                    background: 'linear-gradient(135deg, rgba(88,28,135,0.2), rgba(30,58,138,0.2))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Simulated fluid motion background */}
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        width: '150%',
                                        height: '150%',
                                        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 60%)',
                                        zIndex: 0
                                    }}
                                />

                                {/* Play button overlay */}
                                <motion.div
                                    whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                    style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)', zIndex: 1, boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
                                >
                                    <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '15px solid white', marginLeft: '5px' }} />
                                </motion.div>
                            </div>

                            <div style={{ padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                                <span style={{ fontSize: '0.8rem', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{work.category}</span>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.25rem', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{work.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
