// Loaders
import MainLoader from "../Loaders/MainLoader";
import { useLoading } from "../Contexts/LoadingContext";

// React BootStrap
import Container from "react-bootstrap/Container";

// Components
import NavBar from "../Components/NavBar";
import MoviesCardsList from "../Components/MoviesCardsList";
import PaginationList from "../Components/PaginationList";
import Footer from "../Components/Footer";

// React Hook
import { useEffect, useState } from "react";

// External Libraries
import axios from "axios";

// Language
import { useLanguage } from "../Contexts/LanguageContext";

const HomePage = () => {
  const { language } = useLanguage();
  const { isLoading } = useLoading();
  const { setIsLoading, hasFetchedOnce, setHasFetchedOnce } = useLoading();

  const [moviesCards, setMoviesCards] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    if (hasFetchedOnce) return;

    const getAllMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            language,
          },
        });
        console.log(response);

        setHasFetchedOnce(true); // ✅ علم بأن البيانات جُلبت
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    getAllMovies();
  }, [hasFetchedOnce, setIsLoading, setHasFetchedOnce]);

  return isLoading ? (
    <MainLoader />
  ) : (
    <>
      <NavBar />
      <hr
        className="w-75"
        style={{ margin: "4px auto 0px", borderWidth: "2px" }}
      />
      <Container>
        <MoviesCardsList moviesCards={moviesCards} />
        {/* <PaginationList /> */}
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
