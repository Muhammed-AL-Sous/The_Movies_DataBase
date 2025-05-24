// External Libraries
import { motion } from "framer-motion";

// React BootStrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Translation
import { useTranslation } from "react-i18next";

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
  console.log("Movies:", JSON.stringify(moviesCards, null, 2));

  return (
    <>
      <Row className="mt-4">
        {moviesCards.length > 0 &&
          moviesCards.map((card, index) => {
            return (
              <Col xs={12} md={4} lg={3} key={card.id}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Card className="text-center">
                    <Card.Img
                      variant="top"
                      src={
                        card.backdrop_path
                          ? `${IMAGE_URL}${card.backdrop_path}`
                          : "https://via.placeholder.com/300x170?text=No+Image"
                      }
                      alt={card.title}
                      style={{ objectFit: "cover" }}
                    />

                    <Card.Body>
                      <Card.Title>
                        {t("movie_name")} : {card.title || "No Title"}
                      </Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
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
