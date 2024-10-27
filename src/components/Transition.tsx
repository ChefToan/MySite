// src/components/Transition.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
    initial: {
        opacity: 0,
        x: 20
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -20
    }
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
};

const TransitionComponent = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Don't apply transition animation for HomePage
    if (isHomePage) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default TransitionComponent;
