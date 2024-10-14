import { useTheme } from '../ThemeContext';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { SpecialZoomLevel } from '@react-pdf-viewer/core';
import { useEffect, useState } from 'react';

const Resume = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [scale, setScale] = useState(SpecialZoomLevel.PageWidth); // Default to Page Width for large screens

    // Dynamically set the scale based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setScale(SpecialZoomLevel.PageFit); // For smaller screens, fit the page
            } else {
                setScale(SpecialZoomLevel.PageWidth); // For larger screens, scale to page width
            }
        };

        // Set initial scale based on current window size
        handleResize();

        // Attach resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-5 px-4 md:px-16 lg:px-24">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-50">
                My Resume
            </h1>

            <div
                className="flex justify-center items-center w-full max-w-4xl p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">

                <div className="w-full h-full">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl="/pdfs/resume.pdf"
                            defaultScale={scale} // Dynamically apply the scale
                        />
                    </Worker>
                </div>
            </div>

            <footer
                className="fixed bottom-4 right-4 backdrop-blur-lg p-2 flex flex-row hover:gap-4 items-center rounded-full group">
                <div
                    className="flex flex-row gap-0 items-center justify-center text-gray-900/40 dark:text-gray-100/50 group-hover:max-w-2xl max-w-0 overflow-hidden transition-all duration-150 whitespace-nowrap group-hover:pl-2">
                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 bg-gray-900 rounded-full relative hover dark:bg-gray-50 text-gray-50 dark:text-gray-900 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </button>
            </footer>
        </div>
    );
};

export default Resume;
