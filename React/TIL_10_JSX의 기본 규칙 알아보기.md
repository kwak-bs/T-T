# JSX의 기본 규칙 알아보기

> jsx는 react에서 컴포넌트의 생김새를 정의할 때 사용하는 문법이다. 
>
> 얼핏보기에는 HTML 문법같이 생겼지만 사실은 JavaScript이다. 
>
> 그 이유는 Babel이라는 도구를 사용하여 XML 코드가 JavaScript로 변환되기 때문이다. 
>
> 하지만 XML 코드가 JavaScript로 잘 변환되기 위해서는 몇 가지 규칙이 있다.



```markdown
1. 태그는 무조건 닫혀있어야 한다. ex) <div> ~~~ </div>
```

`<br/>`, `<input />` 같은 self-closing 태그로도 사용 가능하다. 





```markdown
2. 두 개의 이상의 태그는 꼭 하나의 태그로 감싸있어야한다. 
```

```react
import React from 'react';
import Hello from './Hello';

// 오류 발생!!
function App() {
    return (
    	<Hello />
        <div>안녕히계세요.</div>
    )
}

    
// 오류 발생 안함!!
function App() {
    return (
        <div>
    		<Hello />
        	<div>안녕히계세요.</div>
    	</div>
    ); 
}
```

하지만 단순히 두 개 이상의 태그를 감싸기위해 불필요한 `<div>` 태그를 사용하는 것이 맘에 안들수도 있다. 그럴땐 **fragment <>**를 사용하면 된다. 

```react
function App() {
    return (
        <> 
    		<Hello />
        	<div>안녕히계세요.</div>
    	</>
    ); 
}
```

**fragment**는 비어있는 이름을 가지고 있는 태그이다. 실제로 브라우저에서 내용을 확인하면 별도로 갖고 있는 태그가 없다. 

추가적으로 return 뒤에 ()는 코드의 가독성 때문에 사용한 것이다. 없어도 무방함.  





```markdown
3. jsx 내부에서 JavaScript 값을 사용하는 방법을 알아보자 
```

중괄호로 감싸주면 된다!

```react
function App() {
    const name = 'react';
    return (
        <> 
    		<Hello />
        	<div>{name}</div> 
    	</>
    ); 
}
```

`{name}`은 react를 출력한다.





```markdown
4. Style과 ClassName을 설정하는 방법을 알아보자.
```

#### **Style 설정 방법**

객체를 만들어줘야한다!

CamelCase를 사용한다.

```react
function App() {
    const style = {
        backgroundColor: 'black',
        color : 'aqua',
        fontSize: 24,
        padding: '1rem'
    };
    return (
        <> 
    		<Hello />
        	<div style={style}>{name}</div> 
    	</>
    ); 
}
```



**CSS 클래스 적용 방법**

```react
import './App.css';

function App() {
    const style = {
        backgroundColor: 'black',
        color : 'aqua',
        fontSize: 24,
        padding: '1rem'
    };
    return (
        <> 
    		<Hello />
        	<div style={style}>{name}</div> 
        	<div className="gray-box"></div> 
    	</>
    ); 
}
```

App.css안에 있는 gray-box 클래스 css를 적용한다! 

className으로 작성하는 것을 잊지말자.





```markdown
5. jsx 안에서 주석을 작성하는 법을 알아보자 
```

```react
import './App.css';

function App() {
    const style = {
        backgroundColor: 'black',
        color : 'aqua',
        fontSize: 24,
        padding: '1rem'
    };
    return (
        <> 
        {/* 어쩌구 저쩌구 주석~~*/}
    		<Hello />
        	<div style={style}>{name}</div> 
        	<div className="gray-box"></div> 
        // 이것도 주석입니다~~
    	</>
    ); 
}
```