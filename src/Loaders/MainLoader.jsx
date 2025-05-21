import Lottie from "lottie-react";
import loaderAnimation from "../assets/Main_Loader.json";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        animationData={loaderAnimation}
        style={{ width: 150, height: 150 }}
        loop={true}
      />
    </div>
  );
};

export default Loader;
