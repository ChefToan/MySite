// src/context/TransitionContext.tsx
import { createContext, useState, ReactNode } from 'react';

interface TransitionContextProps {
    completed: boolean;
    toggleCompleted: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = (value: boolean) => {
        setCompleted(value);
    };

    return (
        <TransitionContext.Provider value={{ toggleCompleted, completed }}>
            {children}
        </TransitionContext.Provider>
    );
};

export default TransitionContext;
