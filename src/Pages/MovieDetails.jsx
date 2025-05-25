// External Libraries
import { motion } from "framer-motion";

// React BootStrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Translation
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

// Loaders
import MainLoader from "../Loaders/MainLoader";
import { useLoading } from "../Contexts/LoadingContext";

// React Hook
import { useEffect, useState } from "react";

// External Libraries
import axios from "axios";

// Language
import { useLanguage } from "../Contexts/LanguageContext";
import NavBar from "../Components/NavBar";

const MovieDetails = () => {
  const { t } = useTranslation(["moviescards", "common"]);
  const { language } = useLanguage();
  const { isLoading, setIsLoading } = useLoading();
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const getMovieById = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: API_KEY,
              language,
            },
          }
        );
        console.log(response.data);
        setCurrentMovie(response.data);
        // setCurrentMovie();
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    getMovieById();
  }, [id, language]);

  useEffect(() => {
    const getSmilarMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar`,
          {
            params: {
              api_key: API_KEY,
              language,
            },
          }
        );
        console.log(response.data.results);
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.log("Error fetching similar movies:", error);
      }
    };
    getSmilarMovies();
  }, [id, language]);

  return isLoading ? (
    <MainLoader />
  ) : (
    <>
      <NavBar />
      <hr
        className="w-75"
        style={{ margin: "10px auto 0px", borderWidth: "2px" }}
      />
      <Container>
        <Row className="mt-3">
          <Col xs={12} md={5} lg={4} className="logo-movie">
            <Card
              className="shadow rounded"
              style={{ overflow: "hidden", height: "100%" }}
            >
              <Card.Img
                variant="top"
                src={
                  `${IMAGE_URL}${currentMovie.poster_path}` ||
                  `${IMAGE_URL}${currentMovie.backdrop_path}`
                }
              />
            </Card>
          </Col>
          <Col xs={12} md={7} lg={8}>
            <Card className="shadow" style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title className="mb-4 fs-2">
                  {t("movie_name")} : {currentMovie.title}
                </Card.Title>
                <Card.Text>
                  {t("genres")} :{" "}
                  {currentMovie.genres
                    ? currentMovie.genres.map((genre) => genre.name).join(" , ")
                    : ""}
                </Card.Text>
                <Card.Text>
                  {t("production_countries")} : {"  "}
                  {currentMovie.production_countries
                    ? currentMovie.production_countries
                        .map((country) => country.name)
                        .join(" , ")
                    : ""}
                </Card.Text>
                <Card.Text>
                  {t(`language`, { ns: "common" })} :{" "}
                  {Array.isArray(currentMovie.spoken_languages) &&
                  currentMovie.spoken_languages.length > 0
                    ? currentMovie.spoken_languages
                        .map(
                          (lang) =>
                            t(`languages.${lang.english_name}`, {
                              ns: "common",
                            }) || lang.english_name
                        )
                        .join(", ")
                    : ""}
                </Card.Text>
                <Card.Text>
                  {" "}
                  {t("release_date")} : {currentMovie.release_date}
                </Card.Text>
                {currentMovie.overview && currentMovie.overview.length > 0 ? (
                  <Card.Text className="lh-lg">
                    {t("overview")} : {currentMovie.overview}
                  </Card.Text>
                ) : (
                  <Card.Text>
                    {t("overview")} : {t("no details", { ns: "common" })}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr
          className="w-85"
          style={{ margin: "20px auto", borderWidth: "2px" }}
        />
        <Row>
          <Col xs={12} className="d-flex justify-content-around">
            <Link to="/">
              <Button variant="warning" className="text-white">
                {t(`go home`, { ns: "common" })}
              </Button>
            </Link>
            {currentMovie.homepage && (
              <a href={currentMovie.homepage} target="_blank">
                <Button variant="primary">{t("show movie")}</Button>
              </a>
            )}
          </Col>
        </Row>
        <hr
          className="w-85"
          style={{ margin: "20px auto", borderWidth: "2px" }}
        />
        <Row>
          <Col xs={12} className="text-white my-3">
            <h2>{t("similar movies")}</h2>
          </Col>
        </Row>

        <Row className="mt-4">
          {similarMovies.length > 0 &&
            similarMovies.map((card, index) => {
              return (
                <Col xs={6} md={4} lg={3} key={card.id} className="my-2">
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Card
                      className="text-center position-relative shadow rounded main-card"
                      style={{ overflow: "hidden" }}
                    >
                      <Card.Img
                        variant="top"
                        src={
                          card.poster_path
                            ? `${IMAGE_URL}${card.poster_path}`
                            : "https://placehold.co/214x321?text=No+Image"
                        }
                        alt={card.title}
                        style={{ objectFit: "cover" }}
                      />

                      <Card.Body className="overlay-card-body">
                        <Card.Title className="card-Title">
                          {t("movie_name")} : {card.title || "No Title"}
                        </Card.Title>
                        <Card.Text className="card-text">
                          {t("release_date")} : {card.release_date}
                        </Card.Text>
                        <Card.Text className="card-text">
                          {t("vote_count")} : {card.vote_count}
                        </Card.Text>
                        <Link to={`/movie/${card.id}`}>
                          <Button
                            className="text-white btn-details"
                            variant="primary"
                          >
                            {t("show_details")}
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
