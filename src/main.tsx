import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Resume from './pages/Resume.tsx';
import Project from './pages/Projects.tsx';
import ContactCard from './pages/ContactCard.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { ThemeProvider } from './ThemeContext'; // import ThemeProvider
import Layout from './Layout'; // import the new Layout component
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,  // Use Layout as the wrapper
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
            {
                path: '/projects',
                element: <Project />,
            },
            {
                path: '/card',
                element: <ContactCard />,
            }
        ],
        errorElement: <NotFoundPage />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
