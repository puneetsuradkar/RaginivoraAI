'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react';

const SERVICES = [
    { value: 'Website Development', emoji: '🌐', desc: 'Landing pages, portfolios, business sites' },
    { value: 'Web Application', emoji: '⚡', desc: 'SaaS platforms, dashboards, CRMs' },
    { value: 'Mobile App', emoji: '📱', desc: 'iOS / Android / Cross-platform' },
    { value: 'AI Automation', emoji: '🤖', desc: 'AI workflows, chatbots, LLM integrations' },
    { value: 'AI Marketing Ads', emoji: '🎯', desc: 'Meta, Google, performance campaigns' },
    { value: 'UI/UX Design Only', emoji: '✨', desc: 'Figma design, prototypes, design systems' },
];

const BUDGETS = [
    'Under ₹25,000',
    '₹25,000 – ₹75,000',
    '₹75,000 – ₹2,00,000',
    '₹2,00,000 – ₹5,00,000',
    '₹5,00,000+',
    'Not sure yet',
];

const TIMELINES = [
    'ASAP (within 2 weeks)',
    '1 Month',
    '2–3 Months',
    '3–6 Months',
    'Flexible / Not fixed',
];

const inputClass = `
    w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white 
    placeholder-neutral-500 text-sm focus:outline-none focus:border-purple-500/60 
    focus:bg-white/8 transition-all duration-200
`;

const STEPS = ['About You', 'Your Project', 'Details'];

export default function QuoteForm() {
    const [step, setStep] = useState(0);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        description: '',
    });

    const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

    const canNext = () => {
        if (step === 0) return form.name && form.email && form.phone;
        if (step === 1) return form.service;
        return true;
    };

    const handleSubmit = async () => {
        setStatus('submitting');
        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle2 size={40} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">We've got your request! 🚀</h3>
                <p className="text-neutral-400 text-base leading-relaxed max-w-sm mx-auto">
                    A custom proposal will land in your inbox within <span className="text-purple-400 font-semibold">24 hours</span>. Check your email for a confirmation.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-neutral-600 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Lead saved to CRM
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-8">
                {STEPS.map((label, i) => (
                    <div key={i} className="flex items-center gap-2 flex-1">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            i < step ? 'bg-purple-500 text-white' : i === step ? 'bg-white text-black' : 'bg-white/10 text-neutral-500'
                        }`}>
                            {i < step ? '✓' : i + 1}
                        </div>
                        <span className={`text-xs font-semibold hidden sm:block transition-colors ${i === step ? 'text-white' : 'text-neutral-600'}`}>{label}</span>
                        {i < STEPS.length - 1 && (
                            <div className={`h-[1px] flex-1 transition-all duration-500 ${i < step ? 'bg-purple-500' : 'bg-white/10'}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                        <div>
                            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">Full Name *</label>
                            <input className={inputClass} type="text" placeholder="Puneet Suradkar" value={form.name} onChange={e => set('name', e.target.value)} />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">Email Address *</label>
                            <input className={inputClass} type="email" placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">Phone / WhatsApp *</label>
                            <input className={inputClass} type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => set('phone', e.target.value)} />
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">What do you need? *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {SERVICES.map(s => (
                                <button
                                    key={s.value}
                                    type="button"
                                    onClick={() => set('service', s.value)}
                                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                                        form.service === s.value
                                            ? 'border-purple-500 bg-purple-500/10'
                                            : 'border-white/10 bg-white/5 hover:border-white/20'
                                    }`}
                                >
                                    <span className="text-2xl block mb-1">{s.emoji}</span>
                                    <div className="text-sm font-semibold text-white">{s.value}</div>
                                    <div className="text-xs text-neutral-500 mt-0.5">{s.desc}</div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                        <div>
                            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-3">Budget Range</label>
                            <div className="grid grid-cols-2 gap-2">
                                {BUDGETS.map(b => (
                                    <button key={b} type="button" onClick={() => set('budget', b)}
                                        className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all ${form.budget === b ? 'border-purple-500 bg-purple-500/10 text-purple-300' : 'border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'}`}>
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-3">Timeline</label>
                            <div className="grid grid-cols-1 gap-2">
                                {TIMELINES.map(t => (
                                    <button key={t} type="button" onClick={() => set('timeline', t)}
                                        className={`px-3 py-2.5 rounded-lg text-xs font-semibold border text-left transition-all ${form.timeline === t ? 'border-purple-500 bg-purple-500/10 text-purple-300' : 'border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'}`}>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">Tell us about your project</label>
                            <textarea
                                className={`${inputClass} resize-none`}
                                rows={4}
                                placeholder="Describe what you want to build, your goals, any inspiration sites, or anything that helps us understand your vision..."
                                value={form.description}
                                onChange={e => set('description', e.target.value)}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8">
                {step > 0 && (
                    <button
                        type="button"
                        onClick={() => setStep(s => s - 1)}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-neutral-400 text-sm font-semibold hover:border-white/20 hover:text-white transition-all"
                    >
                        <ChevronLeft size={16} /> Back
                    </button>
                )}

                {step < STEPS.length - 1 ? (
                    <button
                        type="button"
                        onClick={() => setStep(s => s + 1)}
                        disabled={!canNext()}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    >
                        Next <ChevronRight size={16} />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={status === 'submitting'}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-60"
                    >
                        {status === 'submitting' ? (
                            <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                        ) : (
                            <>Send My Inquiry 🚀</>
                        )}
                    </button>
                )}
            </div>

            {status === 'error' && (
                <p className="text-center text-red-400 text-sm mt-4">Something went wrong. Please email us directly at raginivoraai@gmail.com</p>
            )}
        </div>
    );
}
