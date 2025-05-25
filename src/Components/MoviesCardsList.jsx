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

// const MoviesCardsList = ({ moviesCards, IMAGE_URL }) => {
//   const { t } = useTranslation(["moviescards", "common"]);

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: (index) => ({
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         delay: index * 0.1,
//         ease: "easeOut",
//       },
//     }),
//   };
//   // console.log("Movies:", JSON.stringify(moviesCards, null, 2));

//   return (
//     <>
//       <Row className="mt-4">
//         {moviesCards.length > 0 &&
//           moviesCards.map((card, index) => {
//             return (
//               <Col xs={6} md={4} lg={3} key={card.id} className="my-2">
//                 <motion.div
//                   custom={index}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   style={{ height: "100%" }}
//                 >
//                   <Card
//                     className="text-center position-relative shadow rounded main-card"
//                     style={{ overflow: "hidden", height: "100%" }}
//                   >
//                     <Card.Img
//                       variant="top"
//                       src={
//                         card.poster_path
//                           ? `${IMAGE_URL}${card.poster_path}`
//                           : "https://placehold.co/214x321?text=No+Image"
//                       }
//                       alt={card.title}
//                       style={{ objectFit: "cover", height: "100%" }}
//                     />

//                     <Card.Body className="overlay-card-body">
//                       <Card.Title className="card-Title">
//                         {t("movie_name")} : {card.title || "No Title"}
//                       </Card.Title>
//                       <Card.Text className="card-text">
//                         {t("release_date")} : {card.release_date}
//                       </Card.Text>
//                       <Card.Text className="card-text">
//                         {t("vote_count")} : {card.vote_count}
//                       </Card.Text>
//                       <Link to={`/movie/${card.id}`}>
//                         <Button
//                           className="text-white btn-details"
//                           variant="primary"
//                         >
//                           {t("show_details")}
//                         </Button>
//                       </Link>
//                     </Card.Body>
//                   </Card>
//                 </motion.div>
//               </Col>
//             );
//           })}
//       </Row>
//     </>
//   );
// };
// const MoviesCardsList = ({ moviesCards, IMAGE_URL, searchedMovies }) => {
//   const { t } = useTranslation(["moviescards", "common"]);

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: (index) => ({
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         delay: index * 0.1,
//         ease: "easeOut",
//       },
//     }),
//   };

//   // ✅ استبعاد الأفلام بدون صور
//   const filteredMovies = moviesCards.filter((card) => card.poster_path);

//   return (
//     <Row className="mt-4">
//       {filteredMovies.length > 0 &&
//         filteredMovies.map((card, index) => (
//           <Col xs={6} md={4} lg={3} key={card.id} className="my-2">
//             <motion.div
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               style={{ height: "100%" }}
//             >
//               <Card
//                 className="text-center position-relative shadow rounded main-card"
//                 style={{ overflow: "hidden", height: "100%" }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={`${IMAGE_URL}${card.poster_path}`}
//                   alt={card.title}
//                   style={{ objectFit: "cover", height: "100%" }}
//                 />

//                 <Card.Body className="overlay-card-body">
//                   <Card.Title className="card-Title">
//                     {t("movie_name")} : {card.title || "No Title"}
//                   </Card.Title>
//                   <Card.Text className="card-text">
//                     {t("release_date")} : {card.release_date}
//                   </Card.Text>
//                   <Card.Text className="card-text">
//                     {t("vote_count")} : {card.vote_count}
//                   </Card.Text>
//                   <Link to={`/movie/${card.id}`}>
//                     <Button
//                       className="text-white btn-details"
//                       variant="primary"
//                     >
//                       {t("show_details")}
//                     </Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//     </Row>
//   );
// };
// const MoviesCardsList = ({ moviesCards, searchedMovies, IMAGE_URL }) => {
//   const { t } = useTranslation(["moviescards", "common"]);

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: (index) => ({
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         delay: index * 0.1,
//         ease: "easeOut",
//       },
//     }),
//   };

//   // استخدم نتائج البحث إن وجدت، وإلا القائمة العامة
//   const moviesToDisplay =
//     searchedMovies.length > 0 ? searchedMovies : moviesCards;

//   // استبعاد الأفلام بدون صور
//   const filteredMovies = moviesToDisplay.filter((card) => card.poster_path);

//   return (
//     <Row className="mt-4">
//       {filteredMovies.length > 0 ? (
//         filteredMovies.map((card, index) => (
//           <Col xs={6} md={4} lg={3} key={card.id} className="my-2">
//             <motion.div
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               style={{ height: "100%" }}
//             >
//               <Card
//                 className="text-center position-relative shadow rounded main-card"
//                 style={{ overflow: "hidden", height: "100%" }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={`${IMAGE_URL}${card.poster_path}`}
//                   alt={card.title}
//                   style={{ objectFit: "cover", height: "100%" }}
//                 />
//                 <Card.Body className="overlay-card-body">
//                   <Card.Title className="card-Title">
//                     {t("movie_name")} : {card.title || "No Title"}
//                   </Card.Title>
//                   <Card.Text className="card-text">
//                     {t("release_date")} : {card.release_date}
//                   </Card.Text>
//                   <Card.Text className="card-text">
//                     {t("vote_count")} : {card.vote_count}
//                   </Card.Text>
//                   <Link to={`/movie/${card.id}`}>
//                     <Button
//                       className="text-white btn-details"
//                       variant="primary"
//                     >
//                       {t("show_details")}
//                     </Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))
//       ) : (
//         <p className="text-center fs-4 mt-4">{t("common:no_results_found")}</p>
//       )}
//     </Row>
//   );
// };
const MoviesCardsList = ({ moviesCards = [], IMAGE_URL }) => {
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
      {filteredMovies.length > 0 ? (
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
