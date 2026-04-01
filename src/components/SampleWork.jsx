import { motion } from 'framer-motion';
import { ExternalLink, Play, Globe, Cpu, Smartphone } from 'lucide-react';
import AnimatedText from './AnimatedText';

const projects = [
    { 
        id: 1, 
        title: "Aura AI SaaS Platform", 
        category: "Web Application",
        icon: < Globe className="text-purple-500" size={20} />,
        tags: ["Next.js", "AI Integration", "GSAP"]
    },
    { 
        id: 2, 
        title: "Luxe Cinematic Store", 
        category: "High-End E-commerce",
        icon: < Smartphone className="text-blue-500" size={20} />,
        tags: ["Three.js", "Framer Motion", "Tailwind"]
    },
    { 
        id: 3, 
        title: "Quantum Finance App", 
        category: "Fintech Mobile App",
        icon: < Smartphone className="text-emerald-500" size={20} />,
        tags: ["React Native", "Firebase", "Web-Sockets"]
    },
    { 
        id: 4, 
        title: "Nebula Graphics Engine", 
        category: "Experimental AI Tool",
        icon: < Cpu className="text-orange-500" size={20} />,
        tags: ["PyTorch", "Rust", "WebGPU"]
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export default function SampleWork() {
    return (
        <section id="work" className="py-32 relative bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-6"
                    >
                        Portfolio
                    </motion.span>
                    <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold mb-4 text-white">
                        Selected <span className="bg-gradient-glow bg-clip-text text-transparent">Digital Products</span>
                    </h2>
                    <AnimatedText 
                        el="p" 
                        text="A glimpse into the high-performance ecosystems we build." 
                        className="text-neutral-400 text-lg max-w-[600px] mx-auto" 
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                borderColor: "rgba(168, 85, 247, 0.4)",
                            }}
                            className="group relative bg-[#131313] border border-white/5 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500"
                        >
                            {/* Visual Asset Placeholder */}
                            <div className="aspect-[16/10] bg-neutral-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 z-0" />
                                
                                {/* Animated Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="relative z-10 w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"
                                >
                                    <ExternalLink size={30} />
                                </motion.div>
                            </div>

                            <div className="p-8 lg:p-10 flex flex-col gap-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            {project.icon}
                                            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{project.category}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="hidden sm:flex gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-[0.65rem] text-neutral-400 border border-white/10">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
