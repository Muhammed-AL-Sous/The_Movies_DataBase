import Lottie from "lottie-react";
import loaderAnimation from "../assets/Loaders/Not_Foud_Page_Loader.json";

const Loader = () => {
  return (
    <div>
      <Lottie
        animationData={loaderAnimation}
        style={{ width: 250, height: 250 }}
        loop={true}
      />
    </div>
  );
};

export default Loader;
