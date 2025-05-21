// Loader
import { Suspense } from "react";
import MainLoader from "./Loaders/MainLoader";
import NotFoudPageLoader from "./Loaders/NotFoundPageLoader";
import { LoadingProvider } from "./Contexts/LoadingContext";

// Theme Dark & Light Mode
import { ThemeProvider } from "./Contexts/ThemeContext";

// React BootStrap
import Container from "react-bootstrap/Container";

// Import React
import { Route, Routes } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ThemeProvider>
        <LoadingProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </LoadingProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
