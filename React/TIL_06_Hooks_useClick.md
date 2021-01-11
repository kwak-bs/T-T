# useEffect

```react
import React, { useState, useEffect, useRef } from "react";

// reference는 기본적으로 component의 어떤 부분을 선택할 수 있는 방법.
// document.getElementByID()를 사용하는 것과 동등.

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
      
    // []시(dependency가 존재하지 않을때),
    //componentDidMount, componentDidUpdate 때 호출
    // [blablabla]가 존재하면 (dependency가 존재하면)
    // componentDidMount일 때만 호출
      
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    //ComponentWillUnmount시 이벤트 제거
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

export default function App() {
    
  const sayHello = () => {
    console.log("sayHello");
  };
    
  const title = useClick(sayHello);

  return (
    <div className="App">
      <div> useClick Test </div>
      <h1 ref={title}>hi</h1>
    </div>
  );
}

```

