// App.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { TransitionProvider } from './context/TransitionContext';
import Router from './router/Router';
import './Index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <TransitionProvider>
                    <Router />
                </TransitionProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
