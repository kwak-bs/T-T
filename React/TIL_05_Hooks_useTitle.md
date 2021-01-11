# useEffect

```react
import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    // hi 2번 찍힘
    console.log("hi");
      
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
    
  const titleUpdate = useTitle("Loading...");
    
  // 5초뒤 title 바뀜
  setTimeout(() => titleUpdate("home"), 5000);

  return (
    <div className="App">
      <div> useTitle Test </div>
    </div>
  );
}

```

