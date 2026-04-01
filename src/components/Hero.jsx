import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
import { BackgroundBeams } from './BackgroundBeams';

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
        className="absolute z-10 pointer-events-none"
        style={{ top, left, right, bottom, width: size, height: size }}
        viewBox="0 0 24 24" fill="none"
    >
        <path d="M12 2l1.912 5.813a2 2 0 001.272 1.272L21 11l-5.813 1.912a2 2 0 00-1.272 1.272L12 20l-1.912-5.813a2 2 0 00-1.272-1.272L3 11l5.813-1.912a2 2 0 001.272-1.272L12 2z" fill={color} />
    </motion.svg>
);

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Beams Effect */}
            <BackgroundBeams />

            <div className="container relative z-10 text-center max-w-[900px] mx-auto px-6">
                <div className="mb-8 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] -z-1"
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: 50, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 1.2 }}
                        className="font-heading text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter m-0 perspective-[1000px] transform-style-3d relative inline-block text-white"
                    >
                        <Sparkle top="-10%" left="-5%" delay={0} size={40} color="#a855f7" />
                        <Sparkle top="15%" right="-8%" delay={0.4} size={35} color="#3b82f6" />
                        <Sparkle bottom="-5%" left="40%" delay={0.8} size={25} color="#a855f7" />
                        <Sparkle bottom="10%" left="15%" delay={1.2} size={20} color="#ffffff" />

                        Raginivora<span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine inline-block">AI</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, letterSpacing: '0em' }}
                        animate={{ opacity: 1, letterSpacing: '0.4em' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="text-[clamp(0.7rem,1.5vw,1rem)] font-bold uppercase text-purple-500 mt-4"
                    >
                        Design. Development. Deployment. Digital Dominance.
                    </motion.div>
                </div>

                <AnimatedText
                    el="p"
                    text={[
                        "Beyond Advertising. We engineer high-performance digital products.",
                        "From cinematic websites and scalable mobile apps to experimental AI-driven systems."
                    ]}
                    className="text-lg md:text-xl text-neutral-400 mb-12 max-w-[750px] mx-auto leading-relaxed"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.8 }}
                    className="flex gap-4 justify-center flex-wrap"
                >
                    <Link href="#contact" className="btn btn-primary px-10 py-4 text-lg">
                        View Showreels
                    </Link>
                    <Link href="#contact" className="btn btn-secondary px-10 py-4 text-lg">
                        Start Your Project
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[0.7rem] text-neutral-500 uppercase tracking-[0.2em]">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-[1px] h-10 bg-gradient-to-b from-purple-600 to-transparent"
                />
            </motion.div>
        </section>
    );
}
