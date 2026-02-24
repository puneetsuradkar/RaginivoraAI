import { motion } from 'framer-motion';
import { Video, UserSquare2, ImagePlus, Target, LayoutTemplate, MessageCircle, BarChart3, LineChart } from 'lucide-react';
import AnimatedText from './AnimatedText';

const services = [
    {
        title: "AI Product Video Creation",
        icon: <Video size={32} strokeWidth={1.5} />,
        desc: "High-converting product videos generated using AI models. No physical shoots required. Optimized for Meta, Instagram, and performance ads. Fast production. Scalable variations."
    },
    {
        title: "AI Model-Based Ads",
        icon: <UserSquare2 size={32} strokeWidth={1.5} />,
        desc: "Professional AI-generated model ads for fashion, D2C and product brands. Eliminate shoot costs. Create multiple variations for A/B testing. Designed specifically for paid campaigns."
    },
    {
        title: "Ad Creative Development",
        icon: <ImagePlus size={32} strokeWidth={1.5} />,
        desc: "Scroll-stopping image and video creatives built for conversion. Data-driven hooks. Multiple angles tested per campaign. Designed for cold, warm and retargeting audiences."
    },
    {
        title: "Meta & Google Ads Management",
        icon: <Target size={32} strokeWidth={1.5} />,
        desc: "Complete ad account setup. Campaign structure strategy. Audience targeting. Conversion tracking integration. Daily monitoring and optimization."
    },
    {
        title: "Landing Pages & Funnels",
        icon: <LayoutTemplate size={32} strokeWidth={1.5} />,
        desc: "High-converting landing pages. Offer-focused structure. Lead capture integration. Funnel optimization for better ROI."
    },
    {
        title: "WhatsApp Automation",
        icon: <MessageCircle size={32} strokeWidth={1.5} />,
        desc: "Automated lead follow-ups. Instant customer engagement. Basic chatbot flows. Conversion-focused messaging sequences."
    },
    {
        title: "CRM & Lead Tracking System",
        icon: <BarChart3 size={32} strokeWidth={1.5} />,
        desc: "Lead pipeline setup. Automated lead routing. Performance tracking dashboard. Transparent reporting and analytics."
    },
    {
        title: "Performance Optimization & Reporting",
        icon: <LineChart size={32} strokeWidth={1.5} />,
        desc: "Continuous campaign optimization. Creative testing cycles. Budget scaling strategy. Clear monthly performance reports."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', color: '#a855f7', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}
                    >
                        Capabilities
                    </motion.div>
                    <h2 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Our Core <span className="text-gradient">Services</span>
                    </h2>
                    <AnimatedText
                        el="p"
                        text="Complete AI-Powered Advertising & Growth Infrastructure for Brands"
                        style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderColor: 'rgba(168, 85, 247, 0.4)',
                                boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)'
                            }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '1.5rem',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(12px)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            {/* Subtle animated background glow on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    left: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.1) 0%, transparent 50%)',
                                    zIndex: 0,
                                    pointerEvents: 'none',
                                }}
                            />

                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        style={{ width: '60px', height: '60px', borderRadius: '1rem', background: 'var(--gradient-ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.2 }}>{service.title}</h3>
                                </div>

                                <div style={{ flexGrow: 1 }}>
                                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {service.desc.split('. ').map((sentence, sIdx) => {
                                            if (!sentence) return null;
                                            const cleanSentence = sentence.replace(/\.$/, '');
                                            return (
                                                <li key={sIdx} style={{ lineHeight: 1.5 }}>
                                                    {cleanSentence}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
