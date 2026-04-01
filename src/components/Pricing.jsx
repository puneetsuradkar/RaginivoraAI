import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Globe, Smartphone, Bot, Megaphone } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';
import QuoteForm from './QuoteForm';

const marketingPlans = [
    {
        name: "Starter",
        price: "₹18,000",
        period: "/month",
        tagline: "Launch & Test",
        desc: "Perfect for testing AI ads and validating your market.",
        features: ["6–8 AI ad creatives/month", "Meta ads setup & management", "Lead form integration", "Monthly performance report", "WhatsApp follow-up setup"],
        highlight: false,
        color: '#8b5cf6'
    },
    {
        name: "Growth",
        price: "₹35,000",
        period: "/month",
        tagline: "Scale Fast",
        desc: "The complete system to scale your brand with AI.",
        features: ["12 AI creatives + 4 ad variants", "Landing page + funnel setup", "WhatsApp automation", "Ad management & optimization", "Bi-weekly performance calls"],
        highlight: true,
        color: '#a855f7'
    },
    {
        name: "Authority",
        price: "₹65,000",
        period: "/month",
        tagline: "Dominate Market",
        desc: "Maximum volume with advanced attribution & CRM.",
        features: ["20+ content pieces/month", "Advanced funnel + CRM setup", "Retargeting campaigns", "Weekly optimization reviews", "Dedicated account manager"],
        highlight: false,
        color: '#3b82f6'
    }
];

const customServices = [
    { icon: <Globe size={22} />, label: "Websites" },
    { icon: <Zap size={22} />, label: "Web Apps" },
    { icon: <Smartphone size={22} />, label: "Mobile Apps" },
    { icon: <Bot size={22} />, label: "AI Automation" },
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('custom'); // 'custom' | 'marketing'
    const [showForm, setShowForm] = useState(false);

    return (
        <section id="pricing" className="py-32 relative bg-transparent">
            <div className="container mx-auto px-6 max-w-[1200px]">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <motion.span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        Pricing
                    </motion.span>
                    <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-extrabold text-white mb-4 leading-tight">
                        Transparent <span className="bg-gradient-glow bg-clip-text text-transparent">Pricing</span>
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-[600px] mx-auto">
                        Fixed plans for AI marketing. Custom quotes for everything else.
                    </p>
                </motion.div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 gap-1">
                        <button
                            onClick={() => setActiveTab('custom')}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'custom' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                        >
                            🌐 Websites & Apps
                        </button>
                        <button
                            onClick={() => setActiveTab('marketing')}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'marketing' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                        >
                            🎯 AI Marketing
                        </button>
                    </div>
                </div>

                {/* Custom Quote Tab */}
                {activeTab === 'custom' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {!showForm ? (
                            <div className="max-w-3xl mx-auto">
                                <div className="bg-[#0e0e0e] border border-white/8 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                                    {/* Background glow */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07)_0%,transparent_70%)] pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex justify-center gap-4 mb-8">
                                            {customServices.map((s, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex flex-col items-center gap-2"
                                                >
                                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center text-purple-400">
                                                        {s.icon}
                                                    </div>
                                                    <span className="text-xs text-neutral-500 font-medium">{s.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                                            Every project is unique.<br />
                                            <span className="bg-gradient-glow bg-clip-text text-transparent">So is your quote.</span>
                                        </h3>
                                        <p className="text-neutral-400 text-base leading-relaxed max-w-md mx-auto mb-8">
                                            Pricing for websites, apps, and AI automation depends on complexity, features, and timeline. Fill out our short form and we'll send you a custom proposal within 24 hours — no fluff, no hidden costs.
                                        </p>
                                        
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                                            <div className="flex items-center gap-2 text-sm text-neutral-400"><Check size={14} className="text-green-500" /> No upfront commitment</div>
                                            <div className="flex items-center gap-2 text-sm text-neutral-400"><Check size={14} className="text-green-500" /> Response in 24 hours</div>
                                            <div className="flex items-center gap-2 text-sm text-neutral-400"><Check size={14} className="text-green-500" /> 100% confidential</div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={() => setShowForm(true)}
                                            className="btn btn-primary px-10 py-4 text-base font-bold"
                                        >
                                            Get a Free Custom Quote →
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="max-w-2xl mx-auto bg-[#0e0e0e] border border-white/8 rounded-3xl p-8 md:p-12"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-black text-white mb-2">Tell us about your project</h3>
                                    <p className="text-neutral-500 text-sm">Takes 2 minutes. We'll do the rest.</p>
                                </div>
                                <QuoteForm />
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="mt-6 text-xs text-neutral-600 hover:text-neutral-400 transition-colors block mx-auto"
                                >
                                    ← Go back
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {/* Marketing Plans Tab */}
                {activeTab === 'marketing' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
                            {marketingPlans.map((plan, index) => (
                                <TiltCard
                                    key={index}
                                    style={{
                                        background: plan.highlight
                                            ? 'linear-gradient(180deg, rgba(88,28,135,0.4) 0%, rgba(10,10,10,0.9) 100%)'
                                            : 'rgba(255,255,255,0.02)',
                                        border: plan.highlight ? `1px solid ${plan.color}` : '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '1.5rem',
                                        padding: '2.5rem 2rem',
                                        position: 'relative',
                                        transform: plan.highlight ? 'scale(1.04)' : 'scale(1)',
                                        zIndex: plan.highlight ? 10 : 1,
                                        boxShadow: plan.highlight ? '0 20px 50px rgba(109,40,217,0.25)' : 'none',
                                        backdropFilter: 'blur(12px)',
                                    }}
                                >
                                    {plan.highlight && (
                                        <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#a855f7,#3b82f6)', color: 'white', padding: '0.4rem 1.25rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(168,85,247,0.4)', whiteSpace: 'nowrap' }}>
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-1">
                                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: plan.color }}>{plan.tagline}</span>
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-neutral-500 text-sm mb-6">{plan.desc}</p>
                                    <div className="flex items-baseline gap-1 mb-6">
                                        <span className="font-heading text-4xl font-black text-white">{plan.price}</span>
                                        <span className="text-neutral-500 text-sm">{plan.period}</span>
                                    </div>
                                    <Link href="#contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'} w-full text-center mb-6`}>
                                        Get Started
                                    </Link>
                                    <ul className="flex flex-col gap-3">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                                                <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </TiltCard>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-6 p-5 border border-dashed border-white/15 rounded-2xl text-center text-sm text-neutral-400"
                        >
                            <span className="font-semibold text-white">Performance Plan:</span> ₹25,000 base + 5–10% revenue share. Available for qualified brands only.
                            <Link href="#contact" className="text-purple-400 hover:text-purple-300 ml-2 font-semibold transition-colors">Apply →</Link>
                        </motion.div>
                    </motion.div>
                )}

            </div>
        </section>
    );
}
