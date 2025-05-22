// Loader
import Lottie from "lottie-react";
import loaderAnimation from "../assets/Loaders/Main_Loader.json";

// Theme Dark & Light Mode
import { useTheme } from "../Contexts/ThemeContext";

const Loader = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#212529",
        color: theme === "light" ? "#000000" : "#ffffff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s ease",
      }}
    >
      <Lottie
        animationData={loaderAnimation}
        style={{ width: 200, height: 200 }}
        loop={true}
        autoplay
      />
    </div>
  );
};

export default Loader;
