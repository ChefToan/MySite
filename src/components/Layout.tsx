// src/components/Layout.tsx
import { ReactNode } from 'react';
import HeaderNavBar from './HeaderNavBar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
    showHeader?: boolean;
}

const Layout = ({ children, showHeader = true }: LayoutProps) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col">
            {showHeader && !isHomePage && (
                <div className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full p-5">
                        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 text-center md:text-left">
                            {location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.slice(2)}
                        </h1>
                        <HeaderNavBar />
                    </div>
                </div>
            )}
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default Layout;
