import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-[#050505] py-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="font-heading text-2xl font-black tracking-tighter text-white">
                        Raginivora<span className="bg-gradient-glow bg-clip-text text-transparent">AI</span>
                    </Link>
                    <p className="text-neutral-500 mt-6 max-w-sm leading-relaxed">
                        We engineer the high-performance digital infrastructure that powers the brands of tomorrow. From AI-driven systems to cinematic web experiences.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-heading text-white font-bold mb-6 text-sm uppercase tracking-widest">Studio</h4>
                    <ul className="flex flex-col gap-4 text-sm text-neutral-500">
                        <li><Link href="#services" className="hover:text-purple-400 transition-colors">Services</Link></li>
                        <li><Link href="#work" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
                        <li><Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                    <ul className="flex flex-col gap-4 text-sm text-neutral-500">
                        <li><a href="mailto:raginivoraai@gmail.com" className="hover:text-purple-400 transition-colors">raginivoraai@gmail.com</a></li>
                        <li><a href="https://www.instagram.com/ananyaa_verma0?igsh=aTkybXJ4cGg3cTM3" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.7rem] text-neutral-600 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Raginivora Studio. All rights reserved.</p>
                <div className="flex gap-8">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
