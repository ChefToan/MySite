// ./components/Projects.tsx
import { useTheme } from '../context/ThemeContext.tsx';
// import HeaderNavBar from './HeaderNavBar.tsx';

const Projects = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div>
            <title>Toan's Site | Projects</title>
            {/* Main Wrapper */}
            <div className="flex flex-col w-full min-h-screen">

                {/*/!* Header + Navigation Bar *!/*/}
                {/*<div className="flex flex-col md:flex-row items-center justify-between w-full p-5 bg-white dark:bg-gray-800 shadow-lg">*/}
                {/*    /!* Header (My Projects) *!/*/}
                {/*    <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 text-center md:text-left">*/}
                {/*        My Projects*/}
                {/*    </h1>*/}

                {/*    <HeaderNavBar />*/}
                {/*</div>*/}

                {/* Page Content */}
                <div className="flex items-center justify-center min-h-screen">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200">
                        To be updated soon :D
                    </h1>
                </div>

                {/* Footer for Dark/Light Mode Toggle */}
                <footer
                    className="fixed bottom-4 right-4 backdrop-blur-lg p-2 flex flex-row hover:gap-4 items-center rounded-full group">
                    <div
                        className="flex flex-row gap-0 items-center justify-center text-gray-900/40 dark:text-gray-100/50 group-hover:max-w-2xl max-w-0 overflow-hidden transition-all duration-150 whitespace-nowrap group-hover:pl-2">
                        Toggle {darkMode ? 'Light' : 'Dark'} Mode
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-gray-900 rounded-full relative hover dark:bg-gray-50 text-gray-50 dark:text-gray-900 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Projects;
