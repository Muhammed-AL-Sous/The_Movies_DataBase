import { Navbar, Container, Button } from "react-bootstrap";
import { useTheme } from "../Contexts/ThemeContext";

const ThemedNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand href="#">MyApp</Navbar.Brand>

        {/* Switch Light & Dark Mode Button */}
        <Button
          onClick={toggleTheme}
          variant={theme === "light" ? "dark" : "light"}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
        {/*==== Switch Light & Dark Mode Button ====*/}
      </Container>
    </Navbar>
  );
};

export default ThemedNavbar;
