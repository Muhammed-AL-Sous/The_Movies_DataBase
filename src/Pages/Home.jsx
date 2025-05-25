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

// Optional Icon (إذا أردت استخدام أيقونة مع الرسالة)
import { FaSadTear } from "react-icons/fa";

const HomePage = () => {
  const { language } = useLanguage();
  const { isLoading, setIsLoading } = useLoading();

  const [moviesCards, setMoviesCards] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [lastSearchQuery, setLastSearchQuery] = useState("");

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  // جلب كل الأفلام
  const getAllMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          language,
          page: 1,
        },
      });

      if (response?.data?.results) {
        setCurrentPage(0);
        setIsSearching(false);
        setMoviesCards(response.data.results);
        setPageCount(Math.min(response.data.total_pages, 500));
      }
    } catch (error) {
      console.error("Error Fetching All Movies :", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [language]);

  // البحث عن الأفلام
  const search = async (words) => {
    if (words === "") {
      setSearchedMovies([]);
      setIsSearching(false);
      setLastSearchQuery("");
    } else {
      try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
          params: {
            api_key: API_KEY,
            language,
            query: words,
            page: 1,
          },
        });

        if (response?.data?.results) {
          setIsSearching(true);
          setLastSearchQuery(words);
          setCurrentPage(0);
          setSearchedMovies(response.data.results);
          setPageCount(Math.min(response.data.total_pages, 500));
        }
      } catch (error) {
        console.error("Error Fetching Movies By Search :", error);
      }
    }
  };

  // الانتقال بين الصفحات
  const getCurrentPage = async (page) => {
    try {
      const url = isSearching
        ? `${BASE_URL}/search/movie`
        : `${BASE_URL}/discover/movie`;

      const params = {
        api_key: API_KEY,
        language,
        page,
      };

      if (isSearching) {
        params.query = lastSearchQuery;
      }

      const response = await axios.get(url, { params });

      if (response?.data?.results) {
        setCurrentPage(page - 1);

        if (isSearching) {
          setSearchedMovies(response.data.results);
        } else {
          setMoviesCards(response.data.results);
        }

        setPageCount(Math.min(response.data.total_pages, 500));
      }
    } catch (error) {
      console.error("Error Fetching Current Page :", error);
    }
  };

  return isLoading ? (
    <MainLoader />
  ) : (
    <>
      <NavBar search={search} />
      <hr
        className="w-75"
        style={{ margin: "4px auto 0px", borderWidth: "2px" }}
      />
      <Container>
        {isSearching && searchedMovies.length === 0 ? (
          <div className="text-center py-5">
            <FaSadTear size={50} color="#888" className="mb-3" />
            <h3>
              {language === "ar"
                ? "لم يتم العثور على نتائج."
                : "No results found."}
            </h3>
            <p>
              {language === "ar"
                ? "حاول البحث بكلمات مختلفة."
                : "Try searching with different keywords."}
            </p>
          </div>
        ) : (
          ((isSearching && searchedMovies.length > 0) ||
            (!isSearching && moviesCards.length > 0)) && (
            <>
              <MoviesCardsList
                moviesCards={isSearching ? searchedMovies : moviesCards}
                IMAGE_URL={IMAGE_URL}
              />
              {pageCount > 1 && (
                <PaginationList
                  getCurrentPage={getCurrentPage}
                  pageCount={pageCount}
                />
              )}
            </>
          )
        )}
      </Container>
      <hr
        className="w-75"
        style={{ margin: "20px auto", borderWidth: "2px" }}
      />
      <Footer />
    </>
  );
};

export default HomePage;
