import { useTheme } from './ThemeContext';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const { darkMode } = useTheme(); // Get dark mode state from context

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            {/* Apply the dark background class globally */}
            <div className="w-full min-h-screen bg-white dark:bg-dark-gray transition-colors">
                <Outlet /> {/* This renders the current route component (HomePage, Resume, etc.) */}
            </div>
        </div>
    );
};

export default Layout;
