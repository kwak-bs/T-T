# props를 통해 컴포넌트에게 값 전달하기

```markdown
props === properties의 줄임말.
```

> 특정 값을 전달해주고 싶을 때 사용.
>
> 주로 부모 컴포넌트에서 자식 컴포넌트로 값을 전달할 때 사용한다. 

![image](https://user-images.githubusercontent.com/51367622/112568291-8dddf580-8e25-11eb-89e8-ad638c3cc69e.png)

#### App.js

```react
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <Hello />
  );
}

export default App;
```

#### Hello.js

```react
import React from "react";

function Hello() {
  return 
    <div>안녕하세요! </div>
}
export default Hello;

```

초기 구성 코드입니다. 

화면에는 "안녕하세요!" 가 렌더링 될 것입니다. 

부모 컴포넌트는 App.js이고 자식 컴포넌트는 Hello.js입니다.

 

---

### 부모 컴포넌트에서 자식 컴포넌트로 name과 color 값을 전달해주려면 어떻게 해야될까요?



#### App.js

```react
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <>
      <Hello name="react" color="red" />;
    </>
  );
}

export default App;

```



#### Hello.js

```react
import React from "react";

function Hello(props) {
    console.log(props); // props 객체를 출력한다. 넘겨받은 name: "react", colo: "red" 출력.
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      안녕하세요! {props.name}
    </div>
  );
}

export default Hello;

```

이렇게 하면 화면에는 "안녕하세요! react"가 빨간색 글씨로 렌더링 됩니다. 

참고로 style을 중괄호 두 개로 묶어준 이유는 자바스크립트 값이라 겉에 중괄호로 한번 묶어주고 

그 안에는 객체를 구성할 거라 중괄호로 또 묶어준 것입니다. 



### 자바스크립트에서 배운 비구조화 할당(구조 분해) 문법을 사용해서 더 간편하게 작성해보자

#### Hello.js

```react
import React from "react";

function Hello({color, name}) {

  return (
    <div
      style={{
        color,
      }}
    >
      안녕하세요! {name}
    </div>
  );
}

export default Hello;

```

props 객체를 구조 분해 문법을 통해 color, name으로 값을 넘겨받았다. 중괄호로 묶어주는 것도 잊지말자. 

style = {{ color, }} 는 color = color와 같다. 





### Props에서 값을 지정하지 않았을 때 기본적으로 사용할 값을  설정하는 방법을 알아보자.

#### Hello.js

```react
import React from "react";

function Hello({ color, name }) {
  
  return (
    <div
      style={{
        color: color,
      }}
    >
      안녕하세요! {name}
    </div>
  );
}

Hello.defaultProps = {
  name : '이름없음'
}
export default Hello;

```

이렇게 Hello.js에 Hello**.defaultProps**를 구성하고

부모 컴포넌트인 App.js에서 color="pink" 값만 가지고 name 값은 없는 Hello 컴포넌트를 호출해보자.

**App.js**

```react
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    
    <>
      <Hello name="react" color="red" />;
      <Hello color="pink" />
    </>
  );
}

export default App;

```

![image](https://user-images.githubusercontent.com/51367622/112569822-3bea9f00-8e28-11eb-8f26-f8436e18510e.png)

화면에는 이렇게 렌더링 될 것입니다. 



---

### Props.Children을 알아보자

> Props.Children은 어떤 태그가 있을 때 태그가 div, input이런 것이 아닌 어떤 컴포넌트일 때
>
> `<Wrapper>blabla</Wrapper>`이런 값이 있을 때  안에 있는 blabla를 조회하기 위해서 사용하는 것이 Props.Children이다. 



**Wrapper 컴포넌트를 하나 만들자.**

**Wrapper.js**

```react
import React from "react";

function Wrapper() {
  const style = {
    border: "2px solid black",
    padding: 16,
  };

  return <div style={style}></div>;
}

export default Wrapper;
```

부모 컴포넌트인 App.js에서 Wrapper.js를 불러오자

**App.js**

```react
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}
export default App;

```

![image](https://user-images.githubusercontent.com/51367622/112570576-a0f2c480-8e29-11eb-9e3d-a2efea47fbe5.png)

이런 식으로 화면에 렌더링 될 것입니다. 하지만 이렇게 하면 `<Wrapper>`안에 있는 `<Hello>` 컴포넌트들이 보이지 않게 됩니다. 



이들을 보이게 해주는 것이 **Props.Children**입니다. 

**Wrapper.js**

```react
import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: 16,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;

```

App.js에서 `<Wrapper>`로 감싸준 컴포넌트들을 {children}으로 컴포넌트를 받아 올 수 있다. 

이들은 return할 때 같이 불러오는 것입니다. 

![image](https://user-images.githubusercontent.com/51367622/112570919-47d76080-8e2a-11eb-9a82-473670239b5f.png)

 이쁘게 출력이 잘 됐습니다. 



> 정리하자면 App.js 부모 컴포넌트에서 자식 컴포넌트 안에 값을 넘겨준 name과 color 가 Props이고 자식 컴포넌트인 Hello.js에서는 이 Prop값을 {}로 감싼 비구조화 할당 혹은 Props를 파라미터로 받아와서 사용할 수 있다. 
>
> 기본값은 defaultProps를 사용하면 되고 {children} props는 태그 사이의 내용을 나타내는 것이다. 

