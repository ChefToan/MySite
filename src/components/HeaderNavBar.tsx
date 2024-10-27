import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderNavBar = () => {
    return (
        <nav className="flex space-x-6 mt-4 md:mt-0">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                    end
                    to="/"
                    className={({ isActive }) =>
                        `text-lg font-montserrat ${
                            isActive
                                ? "text-purple-800 dark:text-purple-400 underline font-bold"
                                : "text-gray-400 dark:text-gray-500 hover:text-purple-800 dark:hover:text-purple-400 hover:underline"
                        }`
                    }
                >
                    Home
                </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                    end
                    to="/resume"
                    className={({ isActive }) =>
                        `text-lg font-montserrat ${
                            isActive
                                ? "text-purple-800 dark:text-purple-400 underline font-bold"
                                : "text-gray-400 dark:text-gray-500 hover:text-purple-800 dark:hover:text-purple-400 hover:underline"
                        }`
                    }
                >
                    Resume
                </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                    end
                    to="/projects"
                    className={({ isActive }) =>
                        `text-lg font-montserrat ${
                            isActive
                                ? "text-purple-800 dark:text-purple-400 underline font-bold"
                                : "text-gray-400 dark:text-gray-500 hover:text-purple-800 dark:hover:text-purple-400 hover:underline"
                        }`
                    }
                >
                    Projects
                </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                    end
                    to="/card"
                    className={({ isActive }) =>
                        `text-lg font-montserrat ${
                            isActive
                                ? "text-purple-800 dark:text-purple-400 underline font-bold"
                                : "text-gray-400 dark:text-gray-500 hover:text-purple-800 dark:hover:text-purple-400 hover:underline"
                        }`
                    }
                >
                    Contacts
                </NavLink>
            </motion.div>
        </nav>
    );
};

export default HeaderNavBar;
