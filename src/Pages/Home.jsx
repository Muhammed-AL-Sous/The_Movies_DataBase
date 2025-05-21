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

const HomePage = () => {
  const { isLoading } = useLoading();

  return isLoading ? (
    <MainLoader />
  ) : (
    <>
      <NavBar />
      <Container className="mt-5">
        <h1>Hello, React-Bootstrap with ThemeContext!</h1>
        <MoviesCardsList />
        <PaginationList />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
