// External Libraries
import { motion } from "framer-motion";

// React BootStrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Translation
import { useTranslation } from "react-i18next";

// React Router Dom
import { Link } from "react-router-dom";

// import Skeleton Component
import MovieCardSkeleton from "../Components/MovieCardSkeleton";

const MoviesCardsList = ({ moviesCards = [], IMAGE_URL, isCardsLoading }) => {
  const { t } = useTranslation(["moviescards", "common"]);

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

  const filteredMovies = moviesCards.filter((card) => card?.poster_path);

  return (
    <Row className="mt-4">
      {isCardsLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <Col xs={6} md={4} lg={3} key={index} className="my-2">
            <MovieCardSkeleton />
          </Col>
        ))
      ) : filteredMovies.length > 0 ? (
        filteredMovies.map((card, index) => (
          <Col xs={6} md={4} lg={3} key={card.id} className="my-2">
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              style={{ height: "100%" }}
            >
              <Card
                className="text-center position-relative shadow rounded main-card"
                style={{ overflow: "hidden", height: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src={`${IMAGE_URL}${card.poster_path}`}
                  alt={card.title}
                  loading="lazy" // لتحميل الصور عند اقترابها من الشاشة
                  style={{ objectFit: "cover", height: "100%" }}
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
        ))
      ) : (
        <p className="text-center w-100">{t("common:no_results")}</p>
      )}
    </Row>
  );
};

export default MoviesCardsList;
