import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card-skeleton">
      <Skeleton height={300} />
      <Skeleton height={20} style={{ marginTop: "10px" }} />
      <Skeleton width={"60%"} height={20} />
    </div>
  );
};

export default MovieCardSkeleton;
