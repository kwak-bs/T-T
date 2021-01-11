# useInput

```react
import React, { useState } from "react";

// useInput hooks
// 10자리까지 입력 가능
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;

    let willUpdate = true;
      
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
      
    if (willUpdate) {
      setValue(value);
    }
  };
    
  return { value, onChange };
};

// {...name}  name안에 있는 모든 것들을 풀어준다.
// value={name.value} onChange = {name.onChange}
export default function App() {
    
  //const maxLen = (value) => !value.includes("@"); 이 코드는
  // "@"를 입력 못하게 한다.
  const maxLen = (value) => value.length <= 10;
  const name = useInput("", maxLen);

  return (
    <div className="App">
      <h1>Use hooks</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

```

