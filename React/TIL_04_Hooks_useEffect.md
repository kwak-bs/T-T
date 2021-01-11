# useEffect

```react
import React, { useState, useEffect } from "react";


export default function App() {
    
  const sayHello = () => console.log("useEffect!");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  // number배열만 변화가 됐을 때 useEffct 실행한다.
  // useEffect는 componentDidMount와 componentWillUpdate다.
  // 어떠한 경우에도 useEffect를 실행시키고 싶지 않으면 []을 전달해주면된다.
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div> useEffct Test </div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

```

