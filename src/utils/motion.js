export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
  export const marqueeVariants = {
    animate: {
      x: [-1035, 1080],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };
  export const marqueeVarReverse = {
    animate: {
      x: [1080, -1080],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };
  export const contactmotion = {
    whileHover: {
      y: [0, 30], // Rotate from 0 to 360 degrees
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.3,
        ease: "linear",
      },
    },
  };
  //"left", "tween", 0.5, 0.8

  export const slideIn = (direction) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: "tween",
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };
  };