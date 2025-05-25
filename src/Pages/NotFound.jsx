// Loader
import { Button } from "react-bootstrap";
import NotFoundLoader from "../Loaders/NotFoundPageLoader";
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>{t("Error 404")}</h1>
      <p>{t("Oops! The page you’re looking for can’t be found.")}</p>
      <Link to="/">
        <Button variant="info" className="text-white my-2">
          {t(`go home`, { ns: "common" })}
        </Button>
      </Link>
      <NotFoundLoader />
    </div>
  );
};

export default NotFound;
