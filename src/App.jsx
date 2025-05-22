// Loader
import { LoadingProvider } from "./Contexts/LoadingContext";
import NotFoudPageLoader from "./Loaders/NotFoundPageLoader";

// React
import { Route, Routes } from "react-router-dom";

// Components
import HomePage from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

// Css Files
import "./App.css";

const App = () => {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </LoadingProvider>
  );
};

export default App;
