# useState 사용해보기

> React의 hooks중 하나이다. 
>
> 상태를 동적으로 관리할 때 사용한다.

---

### Counter 예제를 통해서 useState를 알아보겠습니다. 



**App.js**

```react
import React from "react";
import Counter from "./Counter";


function App() {
  return <Counter />;
}

export default App;

```



**Counter.js**

```react
import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0); // (1)

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    // 이런 식으로 함수형 업데이트로 할 수도 있다.
    // 함수형 업데이트는 최적화란 관련이 있다. 알아두면 좋다.
    setNumber((prevNumber) => prevNumber - 1); // (2)
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>  {/*(3)*/} 
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

```

(1) `const [number, setNumber] = useState(0)`

위 코드를 분석해보자면, 

number라는 상태를 생성하는데 그 상태의 기본 값은 0이다. 

setNumber는 number의 상태를 바꿔주는 함수이다. 

원래는 이 코드가 

```react
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
```

이렇게 작성되는거다. 배열 비구조화 할당을 통해서 한줄로 짧게 작성가능한거다. 

**useState**가 호출되었을 땐, 배열을 반환하게 되는데 첫 번째 원소를 number란 이름으로 추출하고 

두 번째 원소를 setNumber란 이름으로 추출하겠다는 것이다. 

<br/>

(2) `setNumber( (prevNumber) => prevNumber - 1);` 

위 코드는 마이너스 이벤트 구현을 이렇게 함수형 업데이트로 할 수 있다는 것을 보여주는 거다. `setNumber(number + 1);` 이렇게 현재 number값에 더해줘도 된다. 

여러가지 방법이 있으니 참고로 알아두면 된다. 함수형 업데이트는 훗날 최적화란 관련이 있으니 알아두면 좋을것이다. 

<br/>

(3) `onClick={onIncrease}` 

자바스크립트는 onclick으로 on다음 소문자가 오지만 React는 on 다음 대문자가 온다. (onClick)

그리고 주의할 점이 있다. 함수를 onClick 이벤트에 넣어주는 거지 호출하면 안된다. 

즉, onIncrease() 이런 식으로 호출하면 안된다.

