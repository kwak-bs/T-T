import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// a href 는 html이므로 홈페이지를 새로 고침 시킴
// Link는 새로고침 안시킴
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
