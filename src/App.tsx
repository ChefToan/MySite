import { useState } from 'react';

const App = () => {
    // State to manage dark/light mode
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle the theme
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div id="__next" className={darkMode ? 'dark' : ''}>
            <div className="absolute w-full min-h-screen bg-white dark:bg-dark-gray shadow-none flex flex-col overflow-hidden transition-colors" style={{ zIndex: 999 }}>
                <div className="w-full h-auto min-h-screen text-white">
                    <div className="w-full h-screen relative flex flex-row gap-24 justify-center px-8">
                        <div className="max-w-6xl bg-gray dark:bg-dark-gray w-full flex flex-row">
                            <div className="w-full md:w-1/2 h-full flex flex-col justify-center z-20 gap-4">
                                <h4 className="text-lg font-montserrat font-light text-gray-500 dark:text-gray-300 flex flex-row gap-2">
                                    <div className="w-fit">
                                        <span>👋</span>
                                    </div>
                                    <span>Hi, I’m</span>
                                </h4>
                                <h1 className="text-4xl md:text-8xl lg:text-6xl font-montserrat font-extrabold text-gray-900 dark:text-gray-50">
                                    Toan Pham
                                </h1>
                                <h2 className="text-xl md:text-2xl font-montserrat font-medium text-gray-600 dark:text-gray-300 dark:font-light">
                                    Full Stack Developer & Junior Student at Arizona State University
                                </h2>
                                <div className="flex flex-row gap-4 mt-8">
                                    <a className="text-lg font-montserrat text-gray-400 dark:text-gray-500 dark:hover:text-purple-400 hover:text-purple-800 hover:underline" href="/resume">Resume</a>
                                    <a className="text-lg font-montserrat text-gray-400 dark:text-gray-500 dark:hover:text-purple-400 hover:text-purple-800 hover:underline" href="/projects">Projects</a>
                                    <a className="text-lg font-montserrat text-gray-400 dark:text-gray-500 dark:hover:text-purple-400 hover:text-purple-800 hover:underline" href="/card">Contact Card</a>
                                </div>
                            </div>

                            <div className="w-1/2 h-full flex flex-col justify-center items-center z-20 p-4 origin-bottom relative hidden md:flex">
                                <img
                                    src="/headshot.jpg"
                                    className="rounded-full contrast-100 brightness-100 w-1/2 aspect-square relative z-10 p-2"
                                    alt="Toan's photo"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="fixed bottom-4 right-4 backdrop-blur-lg p-2 flex flex-row hover:gap-4 items-center rounded-full group">
                    <div className="flex flex-row gap-0 items-center justify-center text-gray-900/40 dark:text-gray-100/50 group-hover:max-w-2xl max-w-0 overflow-hidden transition-all duration-150 whitespace-nowrap group-hover:pl-2">
                        Toggle {darkMode ? 'Light' : 'Dark'} Mode
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-gray-900 rounded-full relative hover dark:bg-gray-50 text-gray-50 dark:text-gray-900 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default App;
