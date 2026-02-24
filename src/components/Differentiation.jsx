import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const bulletPoints = [
    "AI-powered production",
    "72-hour launch",
    "Data-driven optimization",
    "Transparent reporting",
    "Affordable pricing",
    "Built for small brands"
];

function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const endVal = parseInt(end);
            if (start === endVal) return;

            let totalMilSecDur = parseInt(duration);
            let incrementTime = (totalMilSecDur / endVal) * 1000;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === endVal) clearInterval(timer);
            }, incrementTime);
        }
    }, [end, duration, isInView]);

    return (
        <div ref={ref} style={{ textAlign: 'center' }}>
            <h3 className="font-heading" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {prefix}{count}{suffix}
            </h3>
        </div>
    );
}

export default function Differentiation() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.2 }}>
                            We Are Not Just an Agency.<br />
                            <span className="text-gradient">We Build Revenue Systems.</span>
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {bulletPoints.map((point, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={18} color="var(--primary)" />
                                    <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{point}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            background: 'var(--surface)',
                            borderRadius: '1.5rem',
                            padding: '3rem 2rem',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2.5rem'
                        }}
                    >
                        <div>
                            <AnimatedCounter end={72} duration={1.5} />
                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 500 }}>Hours Launch</p>
                        </div>

                        <div style={{ height: '1px', background: 'var(--border)' }} />

                        <div>
                            <AnimatedCounter end={48} suffix="+ Hrs" duration={1.5} />
                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 500 }}>Content Delivery</p>
                        </div>

                        <div style={{ height: '1px', background: 'var(--border)' }} />

                        <div>
                            <AnimatedCounter prefix="₹" end={18} suffix="K" duration={1.5} />
                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontWeight: 500 }}>Starting Plan</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
