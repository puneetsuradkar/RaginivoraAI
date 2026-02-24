import { motion } from 'framer-motion';

export default function AnimatedText({ text, el: Wrapper = "p", className, style, once = true }) {
    const textArray = Array.isArray(text) ? text : [text];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <Wrapper className={className} style={{ ...style }}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: once, margin: "-50px" }}
                style={{ display: 'inline-block' }}
            >
                {textArray.map((line, lineIndex) => (
                    <span key={`${line}-${lineIndex}`} style={{ display: 'block' }}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span key={`${word}-${wordIndex}`} style={{ display: 'inline-block', overflow: 'hidden' }}>
                                <motion.span
                                    variants={child}
                                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                                    whileHover={{ scale: 1.1, color: '#a855f7', textShadow: '0 0 15px rgba(168, 85, 247, 0.8)', cursor: 'default' }}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
}
