// src/components/Transition.tsx
import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TransitionComponent = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isInitialRender, setIsInitialRender] = useState(true);

    // Reset initial render state on page refresh
    useEffect(() => {
        setIsInitialRender(true);
        return () => setIsInitialRender(false);
    }, []);

    // HomePage variants with left exit
    const homePageVariants = {
        initial: {
            opacity: 0,
            x: '-100%',
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: '-100%', // Exit to the left
        },
    };

    // Other pages variants
    const pageVariants = {
        initial: {
            opacity: 0,
            x: '100%',
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: '-100%',
        },
    };

    const transition = {
        type: "tween",
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
    };

    return (
        <motion.div
            initial={isInitialRender ? "initial" : false}
            animate="animate"
            exit="exit"
            variants={isHomePage ? homePageVariants : pageVariants}
            transition={transition}
            className="w-full min-h-screen absolute"
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </motion.div>
    );
};

export default TransitionComponent;
