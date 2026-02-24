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
                        AI-Powered Growth & Advertising System for D2C and Local Brands.
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
                        <a href="mailto:raginivoraai@gmail.com" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>raginivoraai@gmail.com</a>
                        <a href="https://www.instagram.com/ananyaa_verma0?igsh=aTkybXJ4cGg3cTM3" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-block' }}>Instagram</a>
                    </div>
                </div>
            </div>
            <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>© {new Date().getFullYear()} RaginivoraAI. All rights reserved.</p>
            </div>
        </footer>
    );
}
