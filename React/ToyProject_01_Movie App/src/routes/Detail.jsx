import React, { useEffect } from "react";
import "./Detail.css";

const Detail = ({ location, history }) => {
  const check = () => {
    // 클릭해서 들어오는 것이 아닌 검색해서 들어온다면
    // 클릭을 안했으면 state는 undefined임.
    if (location.state === undefined) {
      // home으로 redirect
      history.push("/");
    }
  };
  useEffect(check);

  // 클릭해서 들어오면 잘 보여주고
  // 새로고침하면 다시 redirect
  if (location.state) {
    const { year, title, summary, poster, genres } = location.state;
    //console.log(year, title, summary, poster, genres);
    //console.log(summary.length);

    return (
      <div className="detail">
        <img src={poster} alt={title} title={title} />

        <div className="detail__date">
          <h3 className="detail__title">{title}</h3>
          <h5 className="detail__year">{year}</h5>
          <ul className="detail__genres">
            {genres.map((genre, index) => (
              <li key={index} className="detail__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="detail__summary">{summary}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Detail;
