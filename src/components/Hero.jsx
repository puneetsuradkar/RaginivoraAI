import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
const Sparkle = ({ top, left, right, bottom, delay, size = 30, color = "#a855f7" }) => (
    <motion.svg
        animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 90]
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
            repeatDelay: Math.random() * 0.5
        }}
        style={{ position: 'absolute', top, left, right, bottom, width: size, height: size, zIndex: 10, pointerEvents: 'none' }}
        viewBox="0 0 24 24" fill="none"
    >
        <path d="M12 2l1.912 5.813a2 2 0 001.272 1.272L21 11l-5.813 1.912a2 2 0 00-1.272 1.272L12 20l-1.912-5.813a2 2 0 00-1.272-1.272L3 11l5.813-1.912a2 2 0 001.272-1.272L12 2z" fill={color} />
    </motion.svg>
);

export default function Hero() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px' // adjust for navbar
            }}
        >
            {/* Animated Background Gradient */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 30%, rgba(88, 28, 135, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 70%, rgba(30, 58, 138, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 30%, rgba(88, 28, 135, 0.15) 0%, transparent 50%)'
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)', zIndex: -1 }}
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: 50, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 1.2 }}
                        className="font-heading"
                        style={{
                            fontSize: 'clamp(4rem, 10vw, 8rem)',
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: '-0.05em',
                            margin: 0,
                            perspective: '1000px',
                            transformStyle: 'preserve-3d',
                            position: 'relative',
                            display: 'inline-block'
                        }}
                    >
                        <Sparkle top="-10%" left="-5%" delay={0} size={40} color="#a855f7" />
                        <Sparkle top="15%" right="-8%" delay={0.4} size={35} color="#3b82f6" />
                        <Sparkle bottom="-5%" left="40%" delay={0.8} size={25} color="#a855f7" />
                        <Sparkle bottom="10%" left="15%" delay={1.2} size={20} color="#ffffff" />

                        Raginivora<span style={{
                            background: 'linear-gradient(to right, #a855f7, #3b82f6, #a855f7)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'shine 3s linear infinite',
                            display: 'inline-block'
                        }}>AI</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: '0em' }}
                        animate={{ opacity: 1, letterSpacing: '0.5em' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        style={{
                            fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            color: '#a855f7',
                            marginTop: '1rem'
                        }}
                    >
                        AI-Powered Growth & Digital Advertising System
                    </motion.div>
                </div>

                <style jsx>{`
                    @keyframes shine {
                        to {
                            background-position: 200% center;
                        }
                    }
                `}</style>

                <AnimatedText
                    el="p"
                    text={[
                        "We create, launch and optimize revenue-generating ad campaigns for small brands.",
                        "No shoots. No models. No marketing team required."
                    ]}
                    style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Get Free Demo
                    </Link>
                    <Link href="#contact" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
            >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: '1px', height: '40px', background: 'var(--gradient-glow)' }}
                />
            </motion.div>
        </section>
    );
}
