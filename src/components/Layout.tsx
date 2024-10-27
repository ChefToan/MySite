// src/components/Layout.tsx
import { ReactNode } from 'react';
import HeaderNavBar from './components/HeaderNavBar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
        return <>{children}</>;
    }

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-between w-full p-5 bg-white dark:bg-gray-800 shadow-lg">
                <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 text-center md:text-left">
                    {location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.slice(2)}
                </h1>
                <HeaderNavBar />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default Layout;
