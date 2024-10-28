// src/router/Router.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import TransitionComponent from '../components/Transition';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import Resume from '../components/Resume';
import Project from '../components/Projects';
import ContactCard from '../components/ContactCard';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <Layout showHeader={false}>
                            <TransitionComponent>
                                <HomePage />
                            </TransitionComponent>
                        </Layout>
                    }
                />
                <Route
                    path="/resume"
                    element={
                        <Layout>
                            <TransitionComponent>
                                <Resume />
                            </TransitionComponent>
                        </Layout>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <Layout>
                            <TransitionComponent>
                                <Project />
                            </TransitionComponent>
                        </Layout>
                    }
                />
                <Route
                    path="/card"
                    element={
                        <Layout>
                            <TransitionComponent>
                                <ContactCard />
                            </TransitionComponent>
                        </Layout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Layout>
                            <TransitionComponent>
                                <NotFoundPage />
                            </TransitionComponent>
                        </Layout>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default Router;
