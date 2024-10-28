// src/components/Transition.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TransitionComponent = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const homePageVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            x: '-100%',
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            }
        },
    };

    const pageVariants = {
        initial: {
            opacity: 0,
            x: '100%',
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            }
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={isHomePage ? homePageVariants : pageVariants}
            className="w-full min-h-screen absolute bg-white dark:bg-dark-gray"
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
