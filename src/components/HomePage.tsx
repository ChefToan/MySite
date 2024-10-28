// ./components/HomePage.tsx
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
    const { darkMode, toggleTheme } = useTheme();

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const mainContentVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 0.5
            }
        }
    };

    const navigationVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
                mass: 0.8,
                delay: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const linkVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 10
            }
        },
        hover: {
            scale: 1.1,
            y: -2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="w-full min-h-screen"
        >
            <title>Toan's Site | Home</title>
            <div>
                <div className="w-full h-auto min-h-screen text-white">
                    <div className="w-full h-screen relative flex flex-row gap-24 justify-center px-8">
                        <div className="max-w-6xl w-full flex flex-row">
                            <div className="w-full md:w-1/2 h-full flex flex-col justify-center z-20 gap-4">
                                <motion.h4
                                    variants={mainContentVariants}
                                    className="text-lg font-montserrat font-light text-gray-500 dark:text-gray-300 flex flex-row gap-2"
                                >
                                    <div className="w-fit">
                                        <span>👋</span>
                                    </div>
                                    <span>Hi, I'm</span>
                                </motion.h4>
                                <motion.h1
                                    variants={mainContentVariants}
                                    className="text-4xl md:text-8xl lg:text-6xl font-montserrat font-extrabold text-gray-900 dark:text-gray-50"
                                >
                                    Toan Pham
                                </motion.h1>
                                <motion.h2
                                    variants={mainContentVariants}
                                    className="text-xl md:text-2xl font-montserrat font-medium text-gray-600 dark:text-gray-300 dark:font-light"
                                >
                                    Full Stack Developer & Junior Student at Arizona State University
                                </motion.h2>
                                <motion.div
                                    variants={navigationVariants}
                                    className="flex flex-row gap-4 mt-8"
                                >
                                    <motion.div
                                        variants={linkVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="relative"
                                    >
                                        <Link
                                            to="/resume"
                                            className="text-lg font-montserrat text-gray-400 dark:text-gray-500 dark:hover:text-purple-400 hover:text-purple-800 transition-colors duration-200"
                                        >
                                            Resume
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-800 dark:bg-purple-400"
                                                initial={{ width: "0%" }}
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        variants={linkVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="relative"
                                    >
                                        <Link
                                            to="/projects"
                                            className="text-lg font-montserrat text-gray-400 dark:text-gray-500 dark:hover:text-purple-400 hover:text-purple-800 transition-colors duration-200"
                                        >
                                            Projects
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-800 dark:bg-purple-400"
                                                initial={{ width: "0%" }}
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        variants={linkVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="relative"
                                    >
                                        <Link
                                            to="/card"
                                            className="text-lg font-montserrat text-gray-400 dark:text-gray-500 dark:hover:text-purple-400 hover:text-purple-800 transition-colors duration-200"
                                        >
                                            Contacts
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-800 dark:bg-purple-400"
                                                initial={{ width: "0%" }}
                                                whileHover={{ width: "100%" }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                            <motion.div
                                variants={mainContentVariants}
                                className="w-1/2 h-full flex flex-col justify-center items-center z-20 p-4 origin-bottom relative hidden md:flex"
                            >
                                <img
                                    src="/images/photo1.jpg"
                                    className="rounded-full contrast-100 brightness-100 w-1/2 aspect-square relative z-10 p-2"
                                    alt="Toan's photo"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.footer
                    variants={mainContentVariants}
                    className="fixed bottom-4 right-4 backdrop-blur-lg p-2 flex flex-row hover:gap-4 items-center rounded-full group"
                >
                    <div className="flex flex-row gap-0 items-center justify-center text-gray-900/40 dark:text-gray-100/50 group-hover:max-w-2xl max-w-0 overflow-hidden transition-all duration-150 whitespace-nowrap group-hover:pl-2">
                        Toggle {darkMode ? 'Light' : 'Dark'} Mode
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-gray-900 rounded-full relative hover dark:bg-gray-50 text-gray-50 dark:text-gray-900 transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </button>
                </motion.footer>
            </div>
        </motion.div>
    );
};

export default HomePage;
