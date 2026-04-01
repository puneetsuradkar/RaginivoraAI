import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-heading text-xl font-black tracking-tighter text-white hover:text-purple-400 transition-colors">
                    Raginivora<span className="bg-gradient-glow bg-clip-text text-transparent">AI</span>
                </Link>

                <div className="flex gap-8 items-center">
                    <Link href="#services" className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">Services</Link>
                    <Link href="#work" className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">Projects</Link>
                    <Link href="#contact" className="btn btn-primary px-5 py-2 text-sm">
                        Start a Project
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
