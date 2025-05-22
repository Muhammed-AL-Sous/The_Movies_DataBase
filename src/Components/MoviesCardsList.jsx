// External Libraries
import { motion } from "framer-motion";

const MoviesCardsList = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default MoviesCardsList;
