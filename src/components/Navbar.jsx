import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50,
                background: 'rgba(10, 10, 10, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--border)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Link href="#services" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-muted)', display: 'inline-block' }}>Services</Link>
                    <Link href="#pricing" className="nav-link" style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-muted)', display: 'inline-block' }}>Pricing</Link>
                    <Link href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
                        Get Free Demo
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
