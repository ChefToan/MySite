export const pageVariants = {
    initial: {
        x: "100%", // Start off the screen to the right
        opacity: 0,
    },
    in: {
        x: 0, // Move to the center
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
