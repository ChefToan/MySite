// src/router/Router.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import TransitionComponent from '../components/Transition';
import HomePage from '../components/HomePage';
import Resume from '../components/Resume';
import Project from '../components/Projects';
import ContactCard from '../components/ContactCard';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <TransitionComponent>
                            <HomePage />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/resume"
                    element={
                        <TransitionComponent>
                            <Resume />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <TransitionComponent>
                            <Project />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="/card"
                    element={
                        <TransitionComponent>
                            <ContactCard />
                        </TransitionComponent>
                    }
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </AnimatePresence>
    );
};

export default Router;
