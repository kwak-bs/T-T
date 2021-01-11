# usePreventLeave

```react
import React, { useState, useEffect, useRef } from "react";

const usePreventLeave = () => {
    
  const listener = (e) => {
    e.preventDefault();

    // 이거 해줘야함. 왠지는 모름.
    e.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

export default function App() {
    
  // useState는 배열 []을 사용하여 구조화하지만
  // 사용자 지정 훅은 속성이 있는 개체를 반환하기 때문에 {} 사용
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <div> usePreventLeave Test </div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

```

