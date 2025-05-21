// React Hook
import { useEffect } from "react";
import { useLoading } from "../Contexts/LoadingContext";

const MoviesCardsList = () => {
  const { setIsLoading, hasFetchedOnce, setHasFetchedOnce } = useLoading();

  useEffect(() => {
    if (hasFetchedOnce) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        setHasFetchedOnce(true); // ✅ علم بأن البيانات جُلبت
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, [hasFetchedOnce, setIsLoading, setHasFetchedOnce]);

  return <></>;
};

export default MoviesCardsList;
