# 조건부 렌더링

> 조건부 렌더링을 구현하는 가장 기본적인 방법은 **삼항 연산자**를 사용하는 것이다.



#### App.js

```react
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;

```



#### Hello.js

```react
import React from "react";

function Hello({ color, name, isSpecial }) {
  
  return (
    <div style={{
        color,
      }}>
      {isSpecial ? <b>*</b> : null}
      안녕하세요! {name}
    </div>
  );
}

Hello.defaultProps = {
  name : '이름없음'
}
export default Hello;

```

참고로 jsx에서 {null}, {false}, {undefined}를 렌더링 하면 아무것도 안나타난다. 

하지만 falsy한 값인 {0}만 0을 렌더링한다.

![image](https://user-images.githubusercontent.com/51367622/112598404-df03de80-8e51-11eb-8e2e-cc844ec910cf.png)



보통 삼항 연산자는 내용이 달라질 때 사용하는 것이 유용하다. 하지만 위와 같은 숨기거나 보여주거나 하는 기능에서는 삼항 연산자보다 &&연산자를 사용하는 것이 더 간편하다.



#### Hello.js

```react
import React from "react";

function Hello({ color, name, isSpecial }) {
  
  return (
    <div style={{
        color,
      }}>
      {isSpecial && <b>*</b>}
      안녕하세요! {name}
    </div>
  );
}

Hello.defaultProps = {
  name : '이름없음'
}
export default Hello;

```

&& 연산자는 false일 때 아무 값을 렌더링하지 않고 true일 때는 뒤 쪽에 있는 값을 렌더링한다.



#### 추가 팁

만약 부모 컴포넌트인 App.js에서 isSpecial 값을 true로 설정하지 않은 상태여도 기본 값은 true이기 때문에 true를 반환한다.

#### App.js

```react
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;

```

동일한 결과를 출력한다.