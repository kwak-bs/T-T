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



#### 결과화면 

![image](C:\Users\iam_b\Desktop\113314479-57353d00-9347-11eb-9d73-1ed84e5e2c11.png)

#### 초기화 버튼 눌렀을 때 

![image](C:\Users\iam_b\Desktop\113314772-9bc0d880-9347-11eb-99a0-f69396330843.png)

#### input 태그 안에 value 값을 삭제 하고 초기화 버튼을 눌렀을 경우

![image](C:\Users\iam_b\Desktop\113314991-c90d8680-9347-11eb-8e3c-cd504342b830.png)

