import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', padding: '4rem 0 2rem 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                <div>
                    <span className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                        Raginivora<span className="text-gradient">AI</span>
                    </span>
                    <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.9rem' }}>
                        AI-Powered Growth & Advertising System for Small D2C and Local Brands.
                    </p>
                </div>
                <div>
                    <h4 className="font-heading" style={{ marginBottom: '1rem', fontWeight: 600 }}>Quick Links</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <Link href="#services" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>Services</Link>
                        <Link href="#pricing" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>Pricing</Link>
                        <Link href="#work" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>Sample Work</Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-heading" style={{ marginBottom: '1rem', fontWeight: 600 }}>Contact</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <a href="mailto:hello@raginivora.ai" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>hello@raginivora.ai</a>
                        <a href="#" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>Instagram</a>
                    </div>
                </div>
            </div>
            <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>© {new Date().getFullYear()} RaginivoraAI. All rights reserved.</p>

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/something"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        background: '#25D366',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                        zIndex: 100
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </a>
            </div>
        </footer>
    );
}
