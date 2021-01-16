import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail.jsx";
import Navigation from "./components/Navigation";
import Home from "./routes/Home.jsx";
import { MovieProvider } from "./movieProvider";

//네비게이션은 라우터 안에 위치하고 있어야됨
// HashRouter가 github page에 좀 더 잘 연동됨.
// BrowserRouter는 github page에 설정하기 좀 짜증남.
function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <MovieProvider>
          <Route path="/" exact={true} component={Home} />
        </MovieProvider>
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
    </>
  );
}

export default App;
