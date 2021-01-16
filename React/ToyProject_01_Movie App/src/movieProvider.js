import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext({
  state: {
    isLoading: true,
    movies: [],
  },
});

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // componentDidmount, componentDidupdate시 실행
  useEffect(() => {
    async function fetchMyAPI() {
      // data - data - movies에 접근 (변수도 movies로 접근 하면 잘 출력됨)
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
      );
      // API로 받아온 movies가 잘 출력됨.
      //console.log(movies);
      setIsLoading(false);
      setMovies(movies);
    }
    fetchMyAPI();
  }, []); // 여기서 movies 넣어주면 useContext로 movies 가져올때 무한 루프 빠짐
// 빈 배열이면 Didmount 한번만 실행.
  const value = {
    state: { movies, isLoading },
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

const { Consumer: MovieConsumer } = MovieContext;

export { MovieConsumer, MovieProvider };

export default MovieContext;
