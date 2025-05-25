// External Libraries
import { motion } from "framer-motion";

// React BootStrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Translation
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MoviesCardsList = ({ moviesCards, IMAGE_URL }) => {
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
  // console.log("Movies:", JSON.stringify(moviesCards, null, 2));

  return (
    <>
      <Row className="mt-4">
        {moviesCards.length > 0 &&
          moviesCards.map((card, index) => {
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
    </>
  );
};

export default MoviesCardsList;
