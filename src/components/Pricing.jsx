import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';

const plans = [
    {
        name: "Starter",
        price: "₹18,000",
        period: "/month",
        desc: "Perfect for testing the waters with AI.",
        features: ["6–8 AI ad creatives", "Basic Meta ads setup", "Lead form integration", "Monthly performance report"],
        highlight: false
    },
    {
        name: "Growth",
        price: "₹35,000",
        period: "/month",
        desc: "The complete system to scale your brand.",
        features: ["12 AI creatives", "4 ad variants", "Landing page + funnel setup", "WhatsApp automation", "Ad management & optimization"],
        highlight: true
    },
    {
        name: "Authority",
        price: "₹65,000",
        period: "/month",
        desc: "Maximum volume and advanced attribution.",
        features: ["20+ content pieces", "Advanced funnel", "CRM setup", "Retargeting ads", "Weekly optimization"],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
                        Simple, Transparent Pricing
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Invest in revenue, not just empty clicks.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                    {plans.map((plan, index) => (
                        <TiltCard
                            key={index}
                            style={{
                                background: plan.highlight ? 'linear-gradient(180deg, rgba(88, 28, 135, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%)' : 'rgba(255,255,255,0.02)',
                                border: plan.highlight ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '1.5rem',
                                padding: '3rem 2rem',
                                position: 'relative',
                                transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                                zIndex: plan.highlight ? 10 : 1,
                                boxShadow: plan.highlight ? '0 20px 40px rgba(109, 40, 217, 0.2)' : '0 10px 30px rgba(0,0,0,0.2)',
                                backdropFilter: 'blur(12px)'
                            }}
                        >
                            {plan.highlight && (
                                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gradient-glow)', color: 'white', padding: '0.4rem 1.25rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)' }}>
                                    Most Popular
                                </div>
                            )}

                            <h3 className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', minHeight: '40px' }}>{plan.desc}</p>

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2rem' }}>
                                <span className="font-heading" style={{ fontSize: '3rem', fontWeight: 800 }}>{plan.price}</span>
                                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                            </div>

                            <Link href="#contact" className={plan.highlight ? "btn btn-primary" : "btn btn-secondary"} style={{ width: '100%', marginBottom: '2.5rem' }}>
                                Get Started
                            </Link>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {plan.features.map((feat, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <Check size={18} color={plan.highlight ? "#a855f7" : "var(--text-muted)"} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                                        <span style={{ fontSize: '0.95rem', color: 'var(--foreground)' }}>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ marginTop: '3rem', textAlign: 'center', padding: '1.5rem', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '1rem', backdropFilter: 'blur(5px)' }}
                >
                    <span style={{ fontWeight: 600 }}>Performance Plan:</span> ₹25,000 base + 5–10% revenue share available for qualified brands.
                </motion.div>

            </div>
        </section>
    );
}
