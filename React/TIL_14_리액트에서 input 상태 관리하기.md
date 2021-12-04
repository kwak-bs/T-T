# 리액트에서 input 상태 관리하기

>  간단하게 Input의 상태를 관리하는 법을 알아보겠습니다.

#### App.js

```react
import React from "react";
import InputSample from "./InputSample";

function App() {
  return <InputSample />;
}

export default App;
```



#### InputSample.js

```react
import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;

```

여기서 `<input /> ` 태그 안에 value 값을 설정해주는 것이 중요합니다. 그래야 초기화 버튼을 눌렀을 때, input안의 상태도 같이 비워지기 때문입니다. 
