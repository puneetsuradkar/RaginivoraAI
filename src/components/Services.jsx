import { motion } from 'framer-motion';
import { 
    Code2, 
    Smartphone, 
    Zap, 
    ShieldCheck, 
    Layout, 
    Sparkles, 
    Cpu, 
    LineChart 
} from 'lucide-react';
import AnimatedText from './AnimatedText';

const services = [
    {
        title: "Next-Gen Web Engineering",
        icon: <Code2 size={32} strokeWidth={1.5} />,
        desc: "High-performance, cinematic web experiences built with Next.js, React, and GSAP. Focused on speed, SEO, and butter-smooth interactivity."
    },
    {
        title: "Custom App Ecosystems",
        icon: <Smartphone size={32} strokeWidth={1.5} />,
        desc: "Cross-platform mobile and desktop applications. We build scalable architectures that handle millions of users with ease."
    },
    {
        title: "AI & LLM Integration",
        icon: <Cpu size={32} strokeWidth={1.5} />,
        desc: "Deploy custom AI models, chatbots, and automation workflows. We integrate state-of-the-art LLMs directly into your business logic."
    },
    {
        title: "Premium UI/UX Design",
        icon: <Layout size={32} strokeWidth={1.5} />,
        desc: "Bespoke digital designs that command attention. We focus on modern aesthetics, accessibility, and high-conversion user journeys."
    },
    {
        title: "AI-Powered Ad Systems",
        icon: <Sparkles size={32} strokeWidth={1.5} />,
        desc: "Our heritage: Revenue-generating AI ad campaigns. We combine data-driven creatives with automated optimization for maximum ROI."
    },
    {
        title: "Performance Infrastructure",
        icon: <Zap size={32} strokeWidth={1.5} />,
        desc: "Cloud architecture, CI/CD pipelines, and speed optimization. We ensure your digital products are fast, secure, and always online."
    },
    {
        title: "Trust & Cyber Security",
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        desc: "Enterprise-grade security protocols. We protect your data and your users with advanced encryption and vulnerability monitoring."
    },
    {
        title: "Growth Analytics",
        icon: <LineChart size={32} strokeWidth={1.5} />,
        desc: "Real-time performance tracking. We provide transparent, deep-dive analytics to help you scale your digital presence effectively."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export default function Services() {
    return (
        <section id="services" className="py-32 relative bg-transparent">
            <div className="container mx-auto px-6 max-w-[1200px]">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-[0.2em] mb-6"
                    >
                        Capabilities
                    </motion.span>
                    <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 leading-tight text-white">
                        Digital Agency <span className="bg-gradient-glow bg-clip-text text-transparent">Services</span>
                    </h2>
                    <AnimatedText
                        el="p"
                        text="We engineer the products that define the digital landscape."
                        className="text-neutral-400 text-xl max-w-[700px] mx-auto"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                borderColor: 'rgba(168, 85, 247, 0.4)',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                            }}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col gap-6 backdrop-blur-xl transition-all duration-300"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-ai flex items-center justify-center text-white border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{service.title}</h3>
                            </div>
                            
                            <p className="text-neutral-400 text-[0.95rem] leading-relaxed">
                                {service.desc}
                            </p>
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Sparkles size={16} className="text-purple-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
