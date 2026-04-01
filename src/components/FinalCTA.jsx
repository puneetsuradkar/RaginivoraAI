import { motion } from 'framer-motion';
import QuoteForm from './QuoteForm';

export default function FinalCTA() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background animated blobs */}
            <motion.div
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-[var(--gradient-ai)] bg-[length:400%_400%] opacity-40 z-0"
            />

            <div className="container mx-auto px-6 max-w-[900px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-5"
                        >
                            Start Your Project
                        </motion.span>
                        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight mb-4">
                            Ready to build something<br />
                            <span className="bg-gradient-glow bg-clip-text text-transparent">extraordinary?</span>
                        </h2>
                        <p className="text-neutral-400 text-base leading-relaxed max-w-lg mx-auto">
                            Tell us about your project. We'll craft a custom strategy and get back to you within 24 hours — completely free.
                        </p>
                    </div>

                    <QuoteForm />
                </motion.div>
            </div>
        </section>
    );
}
