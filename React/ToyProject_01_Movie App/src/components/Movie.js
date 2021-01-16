import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__date">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.length > 180 ? `${summary.slice(0, 180)}...` : summary}</p>
        </div>
      </Link>
    </div>
  );
}

// props 타입 정의
// propsTypes는 number, string, bool, func, node등 다양하게 존재한다.
Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// export를 해줘야 다른 js에서 Movie라는 Componenet를 사용할 수 있다.
export default Movie;
