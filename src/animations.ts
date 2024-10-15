// animations.ts
export const pageVariants = {
    initial: {
        x: "100%", // Start off the screen to the right
        opacity: 0,
    },
    in: {
        x: 0, // Slide into view
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
    out: {
        x: "-100%", // Move out of view to the left
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

export const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.8,
};
