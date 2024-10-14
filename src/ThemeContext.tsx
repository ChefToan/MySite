import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme) {
            setDarkMode(JSON.parse(savedTheme));
        }
        // Apply the dark or light mode class to the root HTML element
        document.documentElement.classList.toggle('dark', JSON.parse(savedTheme ?? 'false'));
    }, []);

    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            // Apply or remove the dark class on the root HTML element
            document.documentElement.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
