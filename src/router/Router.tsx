// src/router/NotRouter.tsx
import { Routes, Route } from 'react-router-dom';
import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';
import HomePage from '../components/HomePage';
import Resume from '../components/Resume';
import Project from '../components/Projects';
import ContactCard from '../components/ContactCard';
import NotFoundPage from '../components/NotFoundPage';

const NotRouter = () => {
    return (
        <TransitionProvider>
            <Routes>
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
        </TransitionProvider>
    );
};

export default NotRouter;
