import React, { useContext } from "react";

import Movie from "../components/Movie";
import "./Home.css";
import Context from "../movieProvider";

const Home = () => {
  const { state } = useContext(Context);
  //console.log(state);
  const { isLoading, movies } = state;
  //console.log(movies);
  return (
    // section 태그는 내용적 흐름과 구조를 만들기 위해 내용을 나누는 용도.
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            // 위와 같이 object를 풀어줄 때 map함수를 사용하고, 또
            // jsx에서는 props를 통해서 값을 전달한다.
            // key는 표현되지 않지만 필수 props이다.
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
